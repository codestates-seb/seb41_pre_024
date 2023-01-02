package preproject.back.Member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.repository.MemberRepository;
import preproject.back.Question.repository.QuestionRepository;
import preproject.back.auth.utils.CustomAuthorityUtils;
import preproject.back.exception.BusinessLogicException;
import preproject.back.exception.ExceptionCode;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final QuestionRepository questionRepository;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils,
                         QuestionRepository questionRepository) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.questionRepository = questionRepository;
    }

    /*email 중복체크후 회원 생성*/
    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword); //password 암호화

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles); //db에 user role 저장

        return memberRepository.save(member);
    }
    /*회원이 존재하는지 확인후 회원정보 수정*/
    public Member updateMember(Member member){

        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        return memberRepository.save(findMember);
    }
    /*회원정보 가져오기*/
    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }
    /*회원삭제*/
    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }
    /*회원이 작성한 질문불러오기*/
    public Member findQuestion(String email){
    return null;
    }
    /*회원이 작성한 답변불러오기*/
    public Member findAnswer(long memberId){
        return null;
    }
    /*회원이 존재하는 체크하는 로직*/
    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
    /*email 중복체크 로직*/
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
//    public Member findMember(String email) {
//        Optional<Member> optionalMember = memberRepository.findByEmail(email);
//        Member findMember = optionalMember.orElseThrow(() ->
//                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        return findMember;
//    }
}

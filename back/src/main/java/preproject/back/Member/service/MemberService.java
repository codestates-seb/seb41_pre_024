package preproject.back.Member.service;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.repository.MemberRepository;
import preproject.back.exception.BusinessLogicException;
import preproject.back.exception.ExceptionCode;

import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /*email 중복체크후 회원 생성*/
    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }
    /*회원이 존재하는지 확인후 회원정보 수정*/
    public Member updateMember(Member member){
//        Member findMember = findVerifiedMember(member.getMemberId());
//
//        Optional.ofNullable(member.getName())
//                .ifPresent(name -> findMember.setName(name));
//        Optional.ofNullable(member.getPassword())
//                .ifPresent(password -> findMember.setPassword(password));
//        return memberRepository.save(findMember);
        Optional.ofNullable(member.getName())
                .ifPresent(name -> member.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> member.setPassword(password));
        return memberRepository.save(member);
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
    public Member findQuestion(long memberId){
        return null;
    }
    /*회원이 작성한 답변불러오기*/
    public Member findAnswer(long memberId){
        return null;
    }
    /*회원이 존재하는 체크하는 로직*/
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
    /*email 중복체크 로직*/
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}

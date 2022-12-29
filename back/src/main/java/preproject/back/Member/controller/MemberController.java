package preproject.back.Member.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.dto.MemberPatchDto;
import preproject.back.Member.dto.MemberPostDto;
import preproject.back.Member.dto.MemberResponseDto;
import preproject.back.Member.mapper.MemberMapper;
import preproject.back.Member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;



@RestController
@RequestMapping("/api/members")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    //회원가입
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberDto){
        Member member = mapper.memberPostDtoToMember(memberDto);
        Member response = memberService.createMember(member);
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.CREATED);
    }
    //회원정보 수정
    @PatchMapping("/{member_id}")
    public ResponseEntity patchMember(@PathVariable("member_id") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto){
        Member response = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    //회원정보 보기
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member response = memberService.findMember(memberId);
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }
    //회원 탈퇴
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    //작성질문 리스트
    @GetMapping("/members/questions/{member-id}")
    public ResponseEntity getQuestion(){
        return ResponseEntity.ok(null);
    }
    //작정답변 리스트
    @GetMapping("/members/answers/{member-id}")
    public ResponseEntity getAnswer(){
        return ResponseEntity.ok(null);
    }

}

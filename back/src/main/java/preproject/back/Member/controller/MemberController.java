package preproject.back.Member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.back.Member.dto.MemberResponseDto;

import java.net.URI;


@RestController
@RequestMapping("/member")
@Validated
public class MemberController {
    //회원가입
    @PostMapping
    public ResponseEntity postMember(){
        return ResponseEntity.created(URI.create("/member")).build();
    }
    //회원정보 수정
    @PatchMapping("{member-id}")
    public ResponseEntity patchMember(){
        MemberResponseDto response = new MemberResponseDto("user@email.com","홍길동");
        return ResponseEntity.ok(response);
    }
    //회원정보 보기
    @GetMapping("{member-id}")
    public ResponseEntity getMember(){
        MemberResponseDto response = new MemberResponseDto("user@email.com","홍길동");
        return ResponseEntity.ok(response);
    }
    //회원 탈퇴
    @DeleteMapping("{member-id}")
    public ResponseEntity deleteMember(){
        return ResponseEntity.noContent().build();
    }
    //작성질문 리스트
    @GetMapping("/member/question/{member-id}")
    public ResponseEntity getQuestion(){
        return ResponseEntity.ok(null);
    }
    //작정답변 리스트
    @GetMapping("/member/answer/{member-id}")
    public ResponseEntity getAnswer(){
        return ResponseEntity.ok(null);
    }

}

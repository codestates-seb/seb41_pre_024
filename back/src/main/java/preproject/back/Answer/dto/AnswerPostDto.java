package preproject.back.Answer.dto;


import lombok.*;
import preproject.back.Member.Entity.Member;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnswerPostDto {

//    @Positive
//    private long memberId;

    //public Member getMember() {
    //        Member member = new Member();
    //        member.setMemberId(memberId);
    //        return member;

    @NotBlank(message = "제목은 공백이 아니여야 합니다.")
    private String title;

    @NotBlank(message = "본문 내용은 공백이 아니어야 합니다.")
    private String content;


}

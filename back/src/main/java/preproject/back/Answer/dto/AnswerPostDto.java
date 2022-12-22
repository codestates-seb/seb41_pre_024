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

    @NotBlank(message = "not null")
    private String title;

    @NotBlank(message = "not null")
    private String content;

}

package preproject.back.Answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.back.Member.Entity.Member;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto {

    @Positive
    private long memberId;

    @NotBlank(message = "please not null")
    private String answerTitle;

    @NotBlank(message = "please not null")
    private String answerContent;

}

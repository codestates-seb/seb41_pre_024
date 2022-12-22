package preproject.back.Question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionPatchDto {
    private long questionId;

    @NotBlank(message = "please not null")
    private String title;

    @NotBlank(message = "please not null")
    private String content;
}

package preproject.back.Answer.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;

    private String title;

    private String content;


}

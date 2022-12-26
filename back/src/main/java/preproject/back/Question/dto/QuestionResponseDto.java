package preproject.back.Question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerResponseDto;


import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionResponseDto {
    private long questionId;

    private String title;

    private String content;

    private int recommend;

    private LocalDateTime createdAt;


    private String email;

    private List<AnswerResponseDto> answers;

}
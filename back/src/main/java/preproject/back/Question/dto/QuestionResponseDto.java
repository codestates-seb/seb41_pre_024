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

    private int totalAnswers; //총 답변수

    private int totalRecommend;

  //todo  private int recommend;

    private LocalDateTime createdAt;


    private String email; //TODO 작성자 email보이게

    private List<AnswerResponseDto> answers;
}
package preproject.back.Question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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

    private long memberId;
}
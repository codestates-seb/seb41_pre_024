package preproject.back.Answer.dto;

import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerResponseDto {

    private long answerId;

    private String title;

    private String content;

    private int recommend;

    private LocalDateTime createdAt;

    private boolean choose;

    private long questionId;

    private long memberId;
}

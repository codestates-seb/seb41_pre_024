package preproject.back.Answer.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class AnswerResponseDto {

    private long answerId;

    private String title;

    private String content;

    private int recommend;

    private LocalDateTime createdAt;

    private boolean choose;

    private long questionId;

    private String email; }//todo response에 member email값 리턴하도록 수정


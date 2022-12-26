package preproject.back.Question.exception;

import lombok.Getter;

public enum ExceptionCode {
    QUESTION_NOT_FOUND(404, "Question not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

package preproject.back.Answer.Exception;

import lombok.Getter;

public enum ExceptionCode {

    ANSWER_NOT_FOUND(404, "Answer not found"),

    ANSWER_EXISTS(409, "Answer exists"),

    ALREADY_CHOSEN_ANSWER(400, "already chosen answer in this question");
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

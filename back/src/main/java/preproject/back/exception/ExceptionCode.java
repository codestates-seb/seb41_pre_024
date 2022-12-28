package preproject.back.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member exists"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    ANSWER_EXISTS(409, "Answer exists"),
    ALREADY_CHOSEN_ANSWER(400, "already chosen answer in this question"),
    QUESTION_NOT_FOUND(404, "Question not found"),

    RECOMMEND_STATUS_ONLY_UPDOWN(412,"recommendStatus only up/down"),

    ADOPT_STATUS_ONLY_YESORNO(412,"adoptStatus only yes/no");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

package preproject.back.Member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@Getter
public class MemberPatchDto {
    private long memberId;
    @NotBlank
    private String name;
    @NotBlank
    @Pattern(regexp="(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\\w)(?=\\S+$).{8,20}",
            message = "비밀번호는 대, 소문자와 숫자, 특수문자가 최소 1개 이상 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
    private String password;

}

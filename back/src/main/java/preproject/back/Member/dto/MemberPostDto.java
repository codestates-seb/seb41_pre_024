package preproject.back.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberPostDto {
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String name;
    @NotBlank
    @Pattern(regexp="(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\\w)(?=\\S+$).{8,20}",
            message = "비밀번호는 대, 소문자와 숫자, 특수문자가 최소 1개 이상 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
    private String password;

}

package preproject.back.Member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class MemberPatchDto {
    private long memberId;
    @NotBlank
    private String name;
    @NotBlank
    private String password;

}

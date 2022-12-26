package preproject.back.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String name;


}

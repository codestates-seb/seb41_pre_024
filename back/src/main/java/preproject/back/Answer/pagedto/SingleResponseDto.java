package preproject.back.Answer.pagedto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class SingleResponseDto<T> {
    private T data;
}

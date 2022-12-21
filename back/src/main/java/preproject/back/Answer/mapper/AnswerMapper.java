package preproject.back.Answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerPatchDto;
import preproject.back.Answer.dto.AnswerPostDto;
import preproject.back.Answer.dto.AnswerResponseDto;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer AnswerPostToAnswer(AnswerPostDto answerPostDto);

    Answer AnswerPatchToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);
}

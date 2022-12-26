package preproject.back.Question.mapper;

import org.mapstruct.Mapper;
import preproject.back.Question.Entity.Question;
import preproject.back.Question.dto.QuestionPatchDto;
import preproject.back.Question.dto.QuestionPostDto;
import preproject.back.Question.dto.QuestionResponseDto;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}

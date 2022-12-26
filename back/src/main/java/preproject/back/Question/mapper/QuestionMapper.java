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

//    default QuestionResponseDto questionToQuestionResponseDto(Question question){
//        //answer리스트 생성
//
//        //answerResponseDto리스트 값 각각을  answer객체로 바꿔서
//        //answer리스트 생성해줌
//    }
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}

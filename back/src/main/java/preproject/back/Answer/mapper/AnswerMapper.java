package preproject.back.Answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerPatchDto;
import preproject.back.Answer.dto.AnswerPostDto;
import preproject.back.Answer.dto.AnswerResponseDto;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    //Answer AnswerPostToAnswer(AnswerPostDto answerPostDto);

    default Answer AnswerPostToAnswer(AnswerPostDto answerPostDto){
        if(answerPostDto ==null) return null;
        else {
            Answer answer = new Answer();
            answer.setTitle(answerPostDto.getTitle());
            answer.setContent(answerPostDto.getContent());

            return answer;
        }
    }


    Answer AnswerPatchToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> AnswersToAnswerResponses(List<Answer> answers);
}

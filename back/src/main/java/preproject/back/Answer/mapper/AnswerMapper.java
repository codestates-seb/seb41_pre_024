package preproject.back.Answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerPatchDto;
import preproject.back.Answer.dto.AnswerPostDto;
import preproject.back.Answer.dto.AnswerResponseDto;
import preproject.back.Member.Entity.Member;
import preproject.back.Question.Entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    //Answer AnswerPostToAnswer(long questionId, AnswerPostDto answerPostDto);

    //mapper 기능 직접구현(자동맵핑시 빈 객체 생성 오류)
//    default Answer AnswerPostToAnswer(AnswerPostDto answerPostDto){
//        if(answerPostDto ==null) return null;
//        else {
//            Answer answer = new Answer();
//            answer.setTitle(answerPostDto.getTitle());
//            answer.setContent(answerPostDto.getContent());
//
//            return answer;
//        }
//    }

    default Answer AnswerPostToAnswer(long questionId, AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        answer.setTitle(answerPostDto.getTitle());
        answer.setContent(answerPostDto.getContent());

        Question question = new Question();
        question.setQuestionId(questionId);
        answer.addQuestion(question);

        return answer;
    }

    Answer AnswerPatchToAnswer(AnswerPatchDto answerPatchDto);

//    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);

    //Todo 멤버정보 설정 추가
    default AnswerResponseDto AnswerToAnswerResponseDto(Answer answer){
        Member member = answer.getMember();

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setTitle(answer.getTitle());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setRecommend(answer.getRecommend());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setChoose(answer.isChoose());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());

        return answerResponseDto;



    }


    List<AnswerResponseDto> AnswersToAnswerResponses(List<Answer> answers);

}

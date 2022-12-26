package preproject.back.Question.mapper;

import org.mapstruct.Mapper;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerResponseDto;
import preproject.back.Question.Entity.Question;
import preproject.back.Question.dto.QuestionPatchDto;
import preproject.back.Question.dto.QuestionPostDto;
import preproject.back.Question.dto.QuestionResponseDto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setRecommend(question.getRecommend());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
//        questionResponseDto.setEmail(question.getMember().getEmail());
        List<AnswerResponseDto> list = question.getAnswers()
                .stream().map(
                       answer -> {
                           AnswerResponseDto responseDto
                                   = AnswerResponseDto
                                   .builder()
                                   .answerId(answer.getAnswerId())
                                   .questionId(question.getQuestionId())
                                   .choose(answer.isChoose())
                                   .title(answer.getTitle())
                                   .content(answer.getContent())
                                   .createdAt(answer.getCreatedAt())
                                   .recommend(answer.getRecommend())
//                                   .email(answer.getMember().getEmail())
                                   .build();
                           return responseDto;
                       }
                ).collect(Collectors.toList());
        questionResponseDto.setAnswers(list);
        return questionResponseDto;
    }


    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if (questions == null) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<>();
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }
        return list;
    }
}

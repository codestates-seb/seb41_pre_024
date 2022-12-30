package preproject.back.Answer.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.dto.AnswerPatchDto;
import preproject.back.Answer.dto.AnswerPostDto;
import preproject.back.Answer.dto.AnswerResponseDto;
import preproject.back.Answer.mapper.AnswerMapper;
import preproject.back.Answer.service.AnswerService;
import preproject.back.pagedto.MultiResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(value ="/api")
@Validated
@Slf4j
public class AnswerController {

    private final AnswerService answerService;

    private final AnswerMapper mapper;

    public AnswerController(AnswerMapper mapper, AnswerService answerService){
        this.answerService = answerService;
        this.mapper = mapper;
    }

    //답변 작성 기능 0 t -0
    @PostMapping("questions/{question_id}/answers")
    public ResponseEntity postAnswer( @PathVariable("question_id") @Positive long questionId,
            @Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer =this.answerService.createAnswer(this.mapper.AnswerPostToAnswer(questionId,answerPostDto));
        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.CREATED);

    }


    //답변 수정 기능0 t-0
    @PatchMapping("/answers/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        Answer answer = this.answerService.updateAnswer(answerId, this.mapper.AnswerPatchToAnswer(answerPatchDto));
        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.OK);
    }


//    //답변 리스트 조회 기능0 t-o
//    @GetMapping("/answers/all")
//    public ResponseEntity getAnswerList(@Positive @RequestParam int page,
//                                        @Positive @RequestParam int size){
//        List<Answer> AnswerList = this.answerService.findAnswerList();
//        List<AnswerResponseDto> responseAnswerList = (List)AnswerList.stream().map((answer) -> {
//            return this.mapper.AnswerToAnswerResponseDto(answer);
//        }).collect(Collectors.toList());
//        return new ResponseEntity(responseAnswerList, HttpStatus.OK);
//    }
//
//        //페이지네이션 버전
//            Page<Answer> pageAnswers = answerService.findAnswers(page - 1, size);
//            List<Answer> answers = pageAnswers.getContent();
//            return new ResponseEntity<>(
//                    new MultiResponseDto<>(mapper.AnswersToAnswerResponses(answers),
//                            pageAnswers),
//                    HttpStatus.OK);
//        }

    //답변 삭제 기능0 t-o
    @DeleteMapping("/answers/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") @Positive long answerId){
        this.answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    //답변 추천 기능0

    @PatchMapping("/answers/recommend/{answer_id}")
    public ResponseEntity recommendUpAnswer(@PathVariable("answer_id") @Positive long answerId,
                                            @RequestParam String recommendStatus){
        Answer answer = this.answerService.recommendAnswer(answerId,recommendStatus);

        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer), HttpStatus.OK);
    }

//    //답변 추천(down) 기능0
//    @PatchMapping("/answers/recommend/down/{answer_id}")
//    public ResponseEntity recommendDownAnswer(@PathVariable("answer_id") @Positive long answerId){
//        Answer answer = this.answerService.recommendDownAnswer(answerId);
//
//        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer), HttpStatus.OK);
//    }


    //답변 채택 기능0 //답변채택 취소 ver
//    @PatchMapping("/answers/adoption/{answer_id}")
//    public ResponseEntity adoptAnswer(@PathVariable("answer_id") @Positive long answerId,
//                                      @RequestParam String adoptStatus){
//        Answer answer = this.answerService.adoptAnswer(answerId,adoptStatus);
//
//        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.OK);
//    }
//
//}
    @PatchMapping("/answers/adoption/{answer_id}")
    public ResponseEntity adoptAnswer(@PathVariable("answer_id") @Positive long answerId){
        Answer answer = this.answerService.adoptAnswer(answerId);

        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.OK);
    }

}

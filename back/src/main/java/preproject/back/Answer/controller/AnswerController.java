package preproject.back.Answer.controller;

import lombok.extern.slf4j.Slf4j;
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

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(value ="/answer")
@Validated
@Slf4j
public class AnswerController {

    private final AnswerService answerService;

    private final AnswerMapper mapper;

    public AnswerController(AnswerMapper mapper, AnswerService answerService){
        this.answerService = answerService;
        this.mapper = mapper;
    }

    //답변 작성 기능0
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto){

        Answer answer =this.answerService.createAnswer(this.mapper.AnswerPostToAnswer(answerPostDto));
        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.CREATED);
    }


    //답변 수정 기능0
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive long answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto){
        Answer answer = this.answerService.updateAnswer(answerId, this.mapper.AnswerPatchToAnswer(answerPatchDto));
        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.CREATED);
    }


    //답변 리스트 조회 기능0
    @GetMapping
    public ResponseEntity getAnswerList(){
        List<Answer> AnswerList = this.answerService.findAnswerList();
        List<AnswerResponseDto> responseAnswerList = (List)AnswerList.stream().map((answer) -> {
            return this.mapper.AnswerToAnswerResponseDto(answer);
        }).collect(Collectors.toList());
        return new ResponseEntity(responseAnswerList, HttpStatus.OK);
    }

    //답변 삭제 기능0
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") @Positive long answerId){
        this.answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //답변 추천(up) 기능0
    @PatchMapping("/recommend/up/{answer_id}")
    public ResponseEntity recommendUpAnswer(@PathVariable("answer_id") @Positive long answerId){
        Answer answer = this.answerService.recommendUpAnswer(answerId);

        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    //답변 추천(down) 기능0
    @PatchMapping("/recommend/down/{answer_id}")
    public ResponseEntity recommendDownAnswer(@PathVariable("answer_id") @Positive long answerId){
        Answer answer = this.answerService.recommendDownAnswer(answerId);

        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer), HttpStatus.OK);
    }


    //답변 채택 기능0
    @PatchMapping("/adoption/{answer_id}")
    public ResponseEntity adoptAnswer(@PathVariable("answer_id") @Positive long answerId){
        Answer answer = this.answerService.adoptAnswer(answerId);

        return new ResponseEntity<>(this.mapper.AnswerToAnswerResponseDto(answer),HttpStatus.OK);
    }

}

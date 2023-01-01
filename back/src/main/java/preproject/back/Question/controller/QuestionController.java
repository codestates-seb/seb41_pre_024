package preproject.back.Question.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.repository.MemberRepository;
import preproject.back.Member.service.MemberService;
import preproject.back.Question.Entity.Question;
import preproject.back.Question.dto.QuestionPatchDto;
import preproject.back.Question.dto.QuestionPostDto;
import preproject.back.Question.dto.QuestionResponseDto;
import preproject.back.Question.mapper.QuestionMapper;
import preproject.back.auth.utils.MemberDetailsService;
import preproject.back.pagedto.MultiResponseDto;
import preproject.back.pagedto.SingleResponseDto;
import preproject.back.Question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(value ="/api/questions")
@Validated
@Slf4j
public class QuestionController {
    private final MemberRepository memberRepository;
    private QuestionService questionService;
    private QuestionMapper mapper;


    public QuestionController(QuestionService questionService, QuestionMapper questionMapper,
                              MemberRepository memberRepository) {
        this.questionService = questionService;
        this.mapper = questionMapper;
        this.memberRepository = memberRepository;
    }

    //질문 작성 기능
    @PostMapping()
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto,
                                      @AuthenticationPrincipal Member member
    ) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);


        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    //질문 수정 기능
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionId, mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }

    //특정 질문 선택 기능
    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }

    //질문 리스트 조회 기능
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestionList(page-1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    //질문 삭제 기능
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //질문 추천 기능
    @PatchMapping("/recommend/{question_id}")
    public ResponseEntity recommendUpQuestion(@PathVariable("question_id") @Positive long questionId,
                                            @RequestParam String recommendStatus){
        Question question = questionService.recommendQuestion(questionId,recommendStatus);

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    //질문 검색 기능
    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity searchQuestion(@RequestParam String searchText,
                                                          @Positive @RequestParam int page,
                                                          @Positive @RequestParam int size) {
        Page<Question> pageQuestions =
                questionService.searchQuestion(searchText, searchText, page - 1, size);
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(pageQuestions.getContent()),
                        pageQuestions),
                HttpStatus.OK);
    }
}

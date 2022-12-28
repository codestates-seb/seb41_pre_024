package preproject.back.Question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.back.Answer.Entity.Answer;
import preproject.back.exception.ExceptionCode;
import preproject.back.exception.BusinessLogicException;
import preproject.back.Question.Entity.Question;
import preproject.back.Question.repository.QuestionRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    //질문 작성 기능
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    //질문 수정 기능
    public Question updateQuestion(long questionId, Question question) {
        Question findQuestion = findVerifiedQuestion(questionId);

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));

        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    //특정 질문 선택 기능
    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    //질문 리스트 조회 기능
    public Page<Question> findQuestionList(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    //질문 삭제 기능
    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        questionRepository.delete(question);
    }

    //질문 추천 기능
    public Question recommendQuestion(long questionId, String recommendStatus){
        Question findQuestion = findVerifiedQuestion(questionId);
        if(recommendStatus.equals("up")){
            findQuestion.setRecommend(findQuestion.getRecommend()+1);
        }
        else if(recommendStatus.equals("down")){
            findQuestion.setRecommend(findQuestion.getRecommend()-1);
        }
        else throw new BusinessLogicException(ExceptionCode.RECOMMEND_STATUS_ONLY_UPDOWN);
        return questionRepository.save(findQuestion);

    }
}

package preproject.back.Answer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.Exception.BusinessLogicException;
import preproject.back.Answer.Exception.ExceptionCode;
import preproject.back.Answer.Repository.AnswerRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository){
        this.answerRepository = answerRepository;
    }

    //답변 생성기능
    public Answer createAnswer(Answer answer){

        Answer savedAnswer = answerRepository.save(answer);

        return savedAnswer;
    }

    //답변 업데이트 기능
    public Answer updateAnswer(long answerId, Answer answer){
        //존재하는 답변인지 확인
        Answer findAnswer = verifyAnswer(answerId);

        //각 변수가 존재한다면(변경 내용이 있다면) 바꿔서 저장해주기
        Optional.ofNullable(answer.getTitle())
                .ifPresent(title -> findAnswer.setTitle(title));

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer); //저장하고 리턴
    }

    //답변 전체 찾아오는 기능
//    public List<Answer> findAnswerList() {
//        return answerRepository.findAll(); }

    //페이지네이션 버전
    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("answerId").descending())); //최신순 정렬
    }
    //답변 삭제 기능
    public void deleteAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    //답변 추천(up) 기능
    public Answer recommendUpAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId); //존재하는 답변인지 확인

        findAnswer.setRecommend(findAnswer.getRecommend()+1);

        return answerRepository.save(findAnswer);

    }

    //답변 추천(down) 기능
    public Answer recommendDownAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId); //존재하는 답변인지 확인

        findAnswer.setRecommend(findAnswer.getRecommend()-1);

        return answerRepository.save(findAnswer);

    }

    public Answer adoptAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId);

        verifyChosenAnswer(findAnswer);

        findAnswer.setChoose(true);

        return answerRepository.save(findAnswer);

    }


    /*검증로직*/


    //Answer가 채택 상태이면 예외발생
    //TODO Question 객체의 answerList에 채택상태(true)인 Answer객체가 있으면 예외발생하는 것으로 변환
    private void verifyChosenAnswer(Answer answer){

        if(answer.isChoose() == false) new BusinessLogicException(ExceptionCode.ALREADY_CHOSEN_ANSWER);
    }



    //Answer가 null이면 예외발생
    private Answer verifyAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    return findAnswer;
    }
}

package preproject.back.Answer.service;

import org.springframework.stereotype.Service;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.Exception.BusinessLogicException;
import preproject.back.Answer.Exception.ExceptionCode;
import preproject.back.Answer.Repository.AnswerRepository;

import javax.transaction.Transactional;
import java.util.List;
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
        //TODO 검증로직

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
    public List<Answer> findAnswerList() {
        return answerRepository.findAll(); }//Todo 추후 시간이 된다면 페이지네이션 구현

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

    //Todo 답변 채택 기능
    public Answer adoptAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId);

        //TODO Answer가 채택 상태이면 예외발생

        findAnswer.setChoose(true);

        return answerRepository.save(findAnswer);

    }


    /*검증로직*/

    //TODO Answer가 존재하면 예외발생

    //TODO Answer가 채택 상태이면 예외발생



    //Answer가 null이면 예외발생
    private Answer verifyAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    return findAnswer;
    }
}

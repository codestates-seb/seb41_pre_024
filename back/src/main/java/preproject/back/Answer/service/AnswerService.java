package preproject.back.Answer.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import preproject.back.Question.repository.QuestionRepository;
import preproject.back.exception.ExceptionCode;
import preproject.back.exception.BusinessLogicException;
import org.springframework.stereotype.Service;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Answer.Repository.AnswerRepository;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.service.MemberService;

import javax.transaction.Transactional;

import java.util.Optional;

@Transactional
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    private final QuestionRepository questionRepository;


   private final MemberService memberService;
    public AnswerService(AnswerRepository answerRepository,MemberService memberService,QuestionRepository questionRepository){
        this.answerRepository = answerRepository;
       this.memberService =memberService;
       this.questionRepository =questionRepository;
    }

    //답변 생성기능 postman ok
    public Answer createAnswer(Answer answer){

        //멤버값 찾아서 넣어주고

//              Member findMember = memberService.findVerifiedMember(answer.getMember().getMemberId());
//        answer.addMember(findMember);


        Answer savedAnswer = answerRepository.save(answer);

        return savedAnswer;
    }


    //답변 업데이트 기능 postman ok
    public Answer updateAnswer(long answerId, Answer answer){
        //존재하는 답변인지 확인
        Answer findAnswer = verifyAnswer(answerId);

       /* Member postMember = MemberService.findVerifiedMember(findAnswer.getMember().getMemberId()); // 작성자
        if(memberService.getLoginMember().getMemberId() != postMember.getMemberId()) // 로그인 유저 != 작성자
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED); // 수정 권한 없음*/


        //각 변수가 존재한다면(변경 내용이 있다면) 바꿔서 저장해주기
        Optional.ofNullable(answer.getTitle())
                .ifPresent(title -> findAnswer.setTitle(title));

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer); //저장하고 리턴
    }

    //답변 전체 찾아오는 기능 postman ok
//    public List<Answer> findAnswerList() {
//        return answerRepository.findAll(); }

    //페이지네이션 버전 postman ok
    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("answerId").descending())); //최신순 정렬
    }

    //답변 삭제 기능 postman ok
    public void deleteAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId);
        answerRepository.delete(findAnswer);
        System.out.println("삭제되었습니다");
    }


    //답변 추천(up) 기능 postman ok
    public Answer recommendAnswer(long answerId,String recommendStatus){
        Answer findAnswer = verifyAnswer(answerId); //존재하는 답변인지 확인
        if(recommendStatus.equals("up")){
            findAnswer.setRecommend(findAnswer.getRecommend()+1);
        }
        else if(recommendStatus.equals("down")){
            findAnswer.setRecommend(findAnswer.getRecommend() - 1);
        }
        else throw new BusinessLogicException(ExceptionCode.RECOMMEND_STATUS_ONLY_UPDOWN);
        return answerRepository.save(findAnswer);

    }


//    답변 추천(down) 기능 postman ok
//    public Answer recommendDownAnswer(long answerId){
//        Answer findAnswer = verifyAnswer(answerId); //존재하는 답변인지 확인
//
//        findAnswer.setRecommend(findAnswer.getRecommend()-1);
//
//        return answerRepository.save(findAnswer);

//    }


/*답변 채택 기능 -> 채택 취소기능 추가 ver
//    public Answer adoptAnswer(long answerId,String adoptStatus){
//        Answer findAnswer = verifyAnswer(answerId);
//
//        if(adoptStatus.equals("yes")){
//        verifyChosenAnswer(findAnswer);
//        findAnswer.setChoose(true);
//        }
//        else if(adoptStatus.equals("no")){
//            findAnswer.setChoose(false);
//        }
//        else throw new BusinessLogicException(ExceptionCode.ADOPT_STATUS_ONLY_YESORNO);
//
//        return answerRepository.save(findAnswer);
//
//    }*/


    public Answer adoptAnswer(long answerId){
        Answer findAnswer = verifyAnswer(answerId);
            verifyChosenAnswer(findAnswer);
            findAnswer.setChoose(true);
        return answerRepository.save(findAnswer);

    }


    /*검증로직*/

    //Question 객체의 answerList에 채택상태(true)인 Answer객체가 있으면 예외발생하는 것으로 변환
    private void verifyChosenAnswer(Answer answer){

        if(answer.getQuestion().getAnswers().stream()
                .map(n ->{return n.isChoose();})
                .filter(a->a.booleanValue()==true)
                .count()>=1){
            throw new BusinessLogicException(ExceptionCode.ALREADY_CHOSEN_ANSWER);
        }
    }


    //Answer가 null이면 예외발생
    private Answer verifyAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    return findAnswer;
    }
}

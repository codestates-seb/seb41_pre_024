package preproject.back.Question.Entity;

import preproject.back.Answer.Entity.Answer;
import preproject.back.Member.Entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(name = "question_title")
    private String title;

    @Column(name = "question_content")
    private String content;

    //태그?!?!

    @Column(name = "question_recommend")
    private int recommend;

    @Column(name = "question_time")
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name ="member_id")
    private Member member;

    public void addMember(Member member){
        this.member = member;

    }

    @OneToMany(mappedBy = "question")
    private List<Answer> myAnswerList =new ArrayList<>();

    public void addAnswer(Answer answer){
        myAnswerList.add(answer);
    }

}

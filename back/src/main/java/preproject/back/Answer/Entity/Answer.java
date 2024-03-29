package preproject.back.Answer.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.back.Member.Entity.Member;
import preproject.back.Question.Entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private long answerId;

    @Column(name = "answer_title")
    private String title;

    @Column(name = "answer_content")
    private String content;

    @Column(name = "answer_recommend")
    private int recommend;

    @Column(name = "answer_time")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "answer_choose")
    private boolean choose = false; //기본값 false

    @ManyToOne
    @JoinColumn(name ="question_id")
    private Question question;

    public void addQuestion(Question question){
        this.question = question;
    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }


}

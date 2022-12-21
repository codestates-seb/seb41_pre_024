package preproject.back.Member.Entity;

import preproject.back.Answer.Entity.Answer;
import preproject.back.Question.Entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(name = "member_email")
    private String email;

    @Column(name = "member_name")
    private String name;

    @Column(name = "member_password")
    private String password;


    @OneToMany(mappedBy = "member")
    private List<Question> questionList = new ArrayList<>();

    public void addQuestion(Question question){
        questionList.add(question);
    }

    @OneToMany(mappedBy = "member")
    private List<Answer> myAnswerList = new ArrayList<>();

    public void addAnswer(Answer answer){
        myAnswerList.add(answer);
    }

}

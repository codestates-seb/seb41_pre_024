package preproject.back.Member.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.back.Answer.Entity.Answer;
import preproject.back.Question.Entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long memberId;

    @Column(name = "member_email", nullable = false, unique = true, updatable = false)
    private String email;

    @Column(name = "member_name", nullable = false)
    private String name;

    @Column(name = "member_password", nullable = false)
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

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>(); //사용자 권한 등록

}

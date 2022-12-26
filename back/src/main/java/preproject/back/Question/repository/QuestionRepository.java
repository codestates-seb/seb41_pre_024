package preproject.back.Question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.back.Question.Entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
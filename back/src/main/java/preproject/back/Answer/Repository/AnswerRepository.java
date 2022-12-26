package preproject.back.Answer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.back.Answer.Entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
}

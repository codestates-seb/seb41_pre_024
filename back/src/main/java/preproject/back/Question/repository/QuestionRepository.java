package preproject.back.Question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import preproject.back.Question.Entity.Question;
import preproject.back.Question.mapper.QuestionMapperImpl;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Page<Question> findAllByTitleOrContent(String title, String content, Pageable pageable);
}
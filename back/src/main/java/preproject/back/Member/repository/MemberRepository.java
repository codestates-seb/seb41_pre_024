package preproject.back.Member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.back.Member.Entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

}

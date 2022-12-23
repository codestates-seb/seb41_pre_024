package preproject.back.Member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.back.Member.Entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}

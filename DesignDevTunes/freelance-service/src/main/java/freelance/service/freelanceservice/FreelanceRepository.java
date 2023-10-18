package freelance.service.freelanceservice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelanceRepository extends JpaRepository<Freelance, String> {
    List<Freelance> findByName(String name);
}

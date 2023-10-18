package freelance.service.freelanceservice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelanceRepository extends JpaRepository<Freelance, String> {
    List<Freelance> findByName(String name);
}

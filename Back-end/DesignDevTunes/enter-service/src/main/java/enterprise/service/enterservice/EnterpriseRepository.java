package enterprise.service.enterservice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnterpriseRepository extends JpaRepository<Enterprise, String> {
    List<Enterprise> findByName(String name);
    List<Enterprise> findByType(String type);
}

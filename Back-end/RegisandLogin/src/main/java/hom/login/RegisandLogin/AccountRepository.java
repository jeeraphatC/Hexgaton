package hom.login.RegisandLogin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findOneByEmailAndPassword(String email, String password);

    Account findByEmail(String email);
}


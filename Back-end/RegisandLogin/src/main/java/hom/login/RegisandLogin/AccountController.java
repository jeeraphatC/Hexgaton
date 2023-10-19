package hom.login.RegisandLogin;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/v1/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/save")
    public ResponseEntity<String> saveAccount(@RequestBody AccountDTO accountDTO) {
        if (accountRepository.existsByEmail(accountDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use.");
        }

        if (accountRepository.existsByAccountname(accountDTO.getAccountname())) {
            return ResponseEntity.badRequest().body("Account name is already in use.");
        }
        
        String id = accountService.addAccount(accountDTO);
        return ResponseEntity.ok(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginAccount(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = accountService.loginMesage(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Account>> listAccounts() {
        List<Account> accounts = accountRepository.findAll();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }

}

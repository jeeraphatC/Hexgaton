package hom.login.RegisandLogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @PostMapping("/save")
    public String saveAccount(@RequestBody AccountDTO accountDTO){
        String id=accountService.addAccount(accountDTO);
        return id;
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginAccount(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = accountService.loginMesage(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
}

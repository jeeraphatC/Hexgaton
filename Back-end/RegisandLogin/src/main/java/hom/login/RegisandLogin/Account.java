package hom.login.RegisandLogin;

import javax.persistence.*;

import javax.validation.constraints.NotEmpty;
@Entity
@Table(name = "Saccount")
public class Account {
    @Id
    @Column(name = "account_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int accountid;
    
    @Column(name = "account_name", length = 255)
    @NotEmpty
    private String accountname;
    
    @Column(name = "email", length = 255)
    @NotEmpty
    private String email;
    
    @Column(name = "password", length = 255)
    @NotEmpty
    private String password;

    public Account() {
    }

    public Account(int accountid, String accountname, String email, String password) {
        this.accountid = accountid;
        this.accountname = accountname;
        this.email = email;
        this.password = password;
    }

    public int getAccountid() {
        return accountid;
    }

    public void setAccountid(int accountid) {
        this.accountid = accountid;
    }

    public String getAccountname() {
        return accountname;
    }

    public void setAccountname(String accountname) {
        this.accountname = accountname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    
}
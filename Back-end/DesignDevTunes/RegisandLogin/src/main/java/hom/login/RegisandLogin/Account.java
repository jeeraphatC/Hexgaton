package hom.login.RegisandLogin;

import javax.persistence.*;

import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "S2account")
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

    @Column(name = "number_card", length = 13)
    private String numberCard;


   
    public Account() {
    }

    public Account(int accountid, String accountname, String email, String numberCard, String password) {
        this.accountid = accountid;
        this.accountname = accountname;
        this.email = email;

        this.password = password;
        this.numberCard = numberCard;
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

    public String getNumberCard() {
        return numberCard;
    }

    public void setNumberCard(String numberCard) {
        this.numberCard = numberCard;
    }

}
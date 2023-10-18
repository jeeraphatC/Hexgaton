package hom.login.RegisandLogin;

public class AccountDTO {
    private int accountid;
    private String accountname;
    private String email;
    private String password;

    public AccountDTO() {
    }

    public AccountDTO(int accountid, String accountname, String email, String password) {
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

    @Override
    public String toString() {
        return "AccountDTO [accountid=" + accountid + ", accountname=" + accountname + ", email=" + email
                + ", password=" + password + "]";
    }
    
}
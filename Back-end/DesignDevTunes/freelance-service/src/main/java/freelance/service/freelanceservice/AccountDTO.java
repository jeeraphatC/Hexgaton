package freelance.service.freelanceservice;

public class AccountDTO {
    private Long accountid;
    private String accountname;
    private String email;
    private String password;
    private String numberCard;

    private Freelance freelance;

    public AccountDTO() {
    }

    public AccountDTO(Long accountid, String accountname, String email, String numberCard, String password) {
        this.accountid = accountid;
        this.accountname = accountname;
        this.email = email;
        this.password = password;
        this.numberCard = numberCard;
    }

    public Long getAccountid() {
        return accountid;
    }

    public void setAccountid(Long accountid) {
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

    public Freelance getFreelance() {
        return freelance;
    }

    public void setFreelance(Freelance freelance) {
        this.freelance = freelance;
    }

    @Override
    public String toString() {
        return "AccountDTO [accountid=" + accountid + ", accountname=" + accountname + ", email=" + email
                + ", password=" + password + "]";
    }

}
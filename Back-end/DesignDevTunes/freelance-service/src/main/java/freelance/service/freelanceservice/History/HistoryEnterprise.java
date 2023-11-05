
package freelance.service.freelanceservice.History;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import freelance.service.freelanceservice.Account;
import freelance.service.freelanceservice.Enterprise;

@Entity
@Table(name = "historyEnter")
public class HistoryEnterprise {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name =  "account_id", referencedColumnName = "id")
    private  Account account ;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name =  "workEnter_id", referencedColumnName = "id")
    private  Enterprise enterprise ;



    public HistoryEnterprise() {
        
    }



    public HistoryEnterprise(Long id, Account account, Enterprise enterprise) {
        this.id = id;
        this.account = account;
        this.enterprise = enterprise;
    }



    public Enterprise getEnterprise() {
        return enterprise;
    }

    public void setEnterprise(Enterprise enterprise) {
        this.enterprise = enterprise;
    }



    public Account getAccount() {
        return account;
    }



    public void setAccount(Account account) {
        this.account = account;
    }



    
    
  
    

    

    
}

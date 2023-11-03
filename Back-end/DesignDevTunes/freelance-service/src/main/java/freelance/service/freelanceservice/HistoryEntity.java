
package freelance.service.freelanceservice;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Historys")
public class HistoryEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name =  "workEnter_id", referencedColumnName = "id")
    private  Enterprise enterprise ;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name =  "workFreelance_id", referencedColumnName = "id")
    private Freelance freelancer ;


    public HistoryEntity() {
    }

    public HistoryEntity(Long id, Account account, Enterprise enterprise, Freelance freelancer) {
        this.id = id;
       
        this.enterprise = enterprise;
        this.freelancer = freelancer;
    }

    public Enterprise getEnterprise() {
        return enterprise;
    }

    public void setEnterprise(Enterprise enterprise) {
        this.enterprise = enterprise;
    }

    public Freelance getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(Freelance freelancer) {
        this.freelancer = freelancer;
    }

  
    

    

    
}

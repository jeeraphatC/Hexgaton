package freelance.service.freelanceservice;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Freelance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String name;
    private String price;
    private String time;
    private String description;
    
    public Freelance() {
        
    }
    public Freelance(String id, String name, String price, String time, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.time = time;
        this.description = description;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    
}
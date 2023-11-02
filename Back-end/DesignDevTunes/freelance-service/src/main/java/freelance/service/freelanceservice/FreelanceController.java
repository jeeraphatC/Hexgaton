package freelance.service.freelanceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/freelances") // เปลี่ยน path จาก "/api/enterprises" เป็น "/api/freelances"
public class FreelanceController { // เปลี่ยนชื่อ class จาก EnterpriseController เป็น FreelanceController

    @Autowired
    private FreelanceRepository freelanceRepository; // เปลี่ยนชื่อ repository จาก enterpriseRepository เป็น
                                                     // freelanceRepository

    @GetMapping
    public List<Freelance> getAllFreelances() { // เปลี่ยนชื่อเมทอดจาก getAllEnterprises เป็น getAllFreelances
        return freelanceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Freelance getFreelanceById(@PathVariable Long id) {
        return freelanceRepository.findById(id).orElse(null);
    }

    @GetMapping("/type/{type}")
    public List<Freelance> findFreelanceByType(@PathVariable String type) {
        return freelanceRepository.findByType(type);
    }

    // @GetMapping("/type/{type}/subtype/{subtype}")
    // public List<Freelance> findFreelanceByTypeandSubtype(@PathVariable String type ,@PathVariable String subtype) {
    //     return freelanceRepository.findByTypeandSubtype(type,subtype);
    // }

    @PostMapping
    public Freelance createFreelance(@RequestBody Freelance freelance) { // เปลี่ยนชื่อเมทอดจาก createEnterprise เป็น
                                                                         // createFreelance
        return freelanceRepository.save(freelance);
    }

    @PutMapping("/{id}")
    public Freelance updateFreelance(@PathVariable Long id, @RequestBody Freelance updatedFreelance) { // เปลี่ยนชื่อเมทอดจาก
                                                                                                       // updateEnterprise
                                                                                                       // เป็น
                                                                                                       // updateFreelance
        Freelance existingFreelance = freelanceRepository.findById(id).orElse(null);

        if (existingFreelance != null) {
            existingFreelance.setName(updatedFreelance.getName());
            existingFreelance.setPrice(updatedFreelance.getPrice());
            existingFreelance.setTime(updatedFreelance.getTime());
            existingFreelance.setDescription(updatedFreelance.getDescription());
            existingFreelance.setAccount(updatedFreelance.getAccount());
            return freelanceRepository.save(existingFreelance);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteFreelance(@PathVariable Long id) { // เปลี่ยนชื่อเมทอดจาก deleteEnterprise เป็น deleteFreelance
        freelanceRepository.deleteById(id);
    }

    @PatchMapping("/{id}")
    public Freelance patchFreelance(@PathVariable Long id, @RequestBody Freelance patchedFreelance) {
        Freelance existingFreelance = freelanceRepository.findById(id).orElse(null);

        if (existingFreelance != null) {
            if (patchedFreelance.getName() != null) {
                existingFreelance.setName(patchedFreelance.getName());
            }
            if (patchedFreelance.getPrice() != null) {
                existingFreelance.setPrice(patchedFreelance.getPrice());
            }
            if (patchedFreelance.getTime() != null) {
                existingFreelance.setTime(patchedFreelance.getTime());
            }
            if (patchedFreelance.getDescription() != null) {
                existingFreelance.setDescription(patchedFreelance.getDescription());
            }
            if (patchedFreelance.getType() != null) {
                existingFreelance.setType(patchedFreelance.getType());
            }
            if (patchedFreelance.getAccount() != null) {
                existingFreelance.setAccount(patchedFreelance.getAccount());
            }

            return freelanceRepository.save(existingFreelance);
        }

        return null;
    }

    @PatchMapping("/patch/{id}")
    public ResponseEntity<String> patchDog(@PathVariable long id, @RequestBody FreelanceDTO freelanceDTO) {
        Optional<Freelance> optDog = freelanceRepository.findById(id);
        if (!optDog.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Freelance not found: " + id);
        }
        Freelance freelance = optDog.get();

        // Update dog using mapper from dto
        if (freelanceDTO.getName() != null) {
            freelance.setName(freelanceDTO.getName());
        }
        if (freelanceDTO.getPrice() != null) {
            freelance.setPrice(freelanceDTO.getPrice());
        }
        if (freelanceDTO.getDescription() != null) {
            freelance.setDescription(freelanceDTO.getDescription());
        }
        if (freelanceDTO.getType() != null) {
            freelance.setType(freelanceDTO.getType());
        }

        if (freelanceDTO.getTime() != null) {
            freelance.setTime(freelanceDTO.getTime());
        }
        if (freelanceDTO.getAccount() != null) {
            freelance.setAccount(freelanceDTO.getAccount());
        }

        freelanceRepository.save(freelance);

        return ResponseEntity.ok("Freelance updated");
    }

}

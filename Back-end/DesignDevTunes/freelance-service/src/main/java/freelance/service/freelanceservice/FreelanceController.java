package freelance.service.freelanceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/freelances") // เปลี่ยน path จาก "/api/enterprises" เป็น "/api/freelances"
public class FreelanceController { // เปลี่ยนชื่อ class จาก EnterpriseController เป็น FreelanceController

    @Autowired
    private FreelanceRepository freelanceRepository; // เปลี่ยนชื่อ repository จาก enterpriseRepository เป็น freelanceRepository

    @GetMapping
    public List<Freelance> getAllFreelances() { // เปลี่ยนชื่อเมทอดจาก getAllEnterprises เป็น getAllFreelances
        return freelanceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Freelance getFreelanceById(@PathVariable Long id) { // เปลี่ยนชื่อเมทอดจาก getEnterpriseById เป็น getFreelanceById
        return freelanceRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Freelance createFreelance(@RequestBody Freelance freelance) { // เปลี่ยนชื่อเมทอดจาก createEnterprise เป็น createFreelance
        return freelanceRepository.save(freelance);
    }

    @PutMapping("/{id}")
    public Freelance updateFreelance(@PathVariable Long id, @RequestBody Freelance updatedFreelance) { // เปลี่ยนชื่อเมทอดจาก updateEnterprise เป็น updateFreelance
        Freelance existingFreelance = freelanceRepository.findById(id).orElse(null);

        if (existingFreelance != null) {
            existingFreelance.setName(updatedFreelance.getName());
            existingFreelance.setPrice(updatedFreelance.getPrice());
            existingFreelance.setTime(updatedFreelance.getTime());
            existingFreelance.setDescription(updatedFreelance.getDescription());

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

        return freelanceRepository.save(existingFreelance);
    }

    return null;
}

}

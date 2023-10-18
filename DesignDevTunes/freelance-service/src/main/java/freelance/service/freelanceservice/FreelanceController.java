package freelance.service.freelanceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/freelances")
public class FreelanceController {

    @Autowired
    private FreelanceRepository freelanceRepository;

    // Define methods to handle HTTP requests
    // For example: GET, POST, PUT, DELETE

    // Example: GET all freelances
    @GetMapping
    public List<Freelance> getAllFreelances() {
        return freelanceRepository.findAll();
    }

    // Example: GET a specific freelance by ID
    @GetMapping("/{id}")
    public Freelance getFreelanceById(@PathVariable String id) {
        return freelanceRepository.findById(id).orElse(null);
    }

    // Example: CREATE a new freelance
    @PostMapping
    public Freelance createFreelance(@RequestBody Freelance freelance) {
        return freelanceRepository.save(freelance);
    }

    // Example: UPDATE an existing freelance
    @PutMapping("/{id}")
    public Freelance updateFreelance(@PathVariable String id, @RequestBody Freelance updatedFreelance) {
        Freelance existingFreelance = freelanceRepository.findById(id).orElse(null);

        if (existingFreelance != null) {
            existingFreelance.setName(updatedFreelance.getName());
            existingFreelance.setPrice(updatedFreelance.getPrice());
            existingFreelance.setTime(updatedFreelance.getTime());
            existingFreelance.setDescription(updatedFreelance.getDescription());

            return freelanceRepository.save(existingFreelance);
        }

        return null; // Handle error case, e.g., freelance not found
    }

    @PatchMapping("/{id}")
    public Freelance patchFreelance(@PathVariable String id, @RequestBody Freelance patchedFreelance) {
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

    // Example: DELETE a freelance by ID
    @DeleteMapping("/{id}")
    public void deleteFreelance(@PathVariable String id) {
        freelanceRepository.deleteById(id);
    }
}

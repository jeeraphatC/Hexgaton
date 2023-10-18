package enterprise.service.enterservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enterprises")
public class EnterpriseController {

    @Autowired
    private EnterpriseRepository enterpriseRepository;

    @GetMapping
    public List<Enterprise> getAllEnterprises() {
        return enterpriseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Enterprise getEnterpriseById(@PathVariable String id) {
        return enterpriseRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Enterprise createEnterprise(@RequestBody Enterprise enterprise) {
        return enterpriseRepository.save(enterprise);
    }

    @PutMapping("/{id}")
    public Enterprise updateEnterprise(@PathVariable String id, @RequestBody Enterprise updatedEnterprise) {
        Enterprise existingEnterprise = enterpriseRepository.findById(id).orElse(null);

        if (existingEnterprise != null) {
            existingEnterprise.setName(updatedEnterprise.getName());
            existingEnterprise.setPrice(updatedEnterprise.getPrice());
            existingEnterprise.setTime(updatedEnterprise.getTime());
            existingEnterprise.setDescription(updatedEnterprise.getDescription());

            return enterpriseRepository.save(existingEnterprise);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteEnterprise(@PathVariable String id) {
        enterpriseRepository.deleteById(id);
    }
}

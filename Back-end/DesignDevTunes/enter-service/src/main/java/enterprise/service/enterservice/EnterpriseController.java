package enterprise.service.enterservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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

    @GetMapping("/type/{type}")
    public List<Enterprise> findEnterprisesByType(@PathVariable String type) {
        return enterpriseRepository.findByType(type);
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
            existingEnterprise.setType(updatedEnterprise.getType());

            return enterpriseRepository.save(existingEnterprise);
        }

        return null;
    }

    @PatchMapping("/{id}")
    public Enterprise patchEnterprise(@PathVariable String id, @RequestBody Enterprise patchedEnterprise) {
        Enterprise existingEnterprise = enterpriseRepository.findById(id).orElse(null);

        if (existingEnterprise != null) {
            // ตรวจสอบและทำการปรับปรุงข้อมูลที่ต้องการ
            if (patchedEnterprise.getName() != null) {
                existingEnterprise.setName(patchedEnterprise.getName());
            }
            if (patchedEnterprise.getPrice() != null) {
                existingEnterprise.setPrice(patchedEnterprise.getPrice());
            }
            if (patchedEnterprise.getTime() != null) {
                existingEnterprise.setTime(patchedEnterprise.getTime());
            }
            if (patchedEnterprise.getDescription() != null) {
                existingEnterprise.setDescription(patchedEnterprise.getDescription());
            }
            if (patchedEnterprise.getType() != null) {
                existingEnterprise.setType(patchedEnterprise.getType());
            }

            return enterpriseRepository.save(existingEnterprise);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteEnterprise(@PathVariable String id) {
        enterpriseRepository.deleteById(id);
    }
}

package freelance.service.freelanceservice.Progress;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
public class ProgressController {

    @Autowired
    private ProgressRepository progressRepository;

    @GetMapping
    public List<Progree> getAllHistory() {
        return progressRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<String> createHistoryEntity(@RequestBody Progree progree) {
        progressRepository.save(progree);
        return ResponseEntity.ok("Create success!!");
    }
}

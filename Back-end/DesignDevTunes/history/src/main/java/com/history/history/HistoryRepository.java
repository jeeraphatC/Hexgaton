package com.history.history;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


import freelance.service.freelanceservice.HistoryEntity;

public interface HistoryRepository extends JpaRepository<HistoryEntity,Long>{
        List<HistoryEntity> findByid(Long id);
        // List<HistoryEntity> findByAccount(Long accountid);

}

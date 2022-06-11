package org.antiguais.model.dao;

import org.antiguais.model.entity.StudentsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;


@Repository
public interface TestStudent extends PagingAndSortingRepository<StudentsEntity, Integer> {
    Page<StudentsEntity> findAll(Pageable pageable);
}

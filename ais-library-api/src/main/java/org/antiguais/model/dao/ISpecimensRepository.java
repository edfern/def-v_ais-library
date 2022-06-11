package org.antiguais.model.dao;

import org.antiguais.model.entity.SpecimensEntity;
import org.antiguais.model.entity.StudentsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISpecimensRepository extends PagingAndSortingRepository<SpecimensEntity,Integer> {

    @Query("from SpecimensEntity s where s.idBook = :idBook")
    SpecimensEntity findByIdBook(int idBook);

    
}

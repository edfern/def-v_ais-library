package org.antiguais.model.dao;

import org.antiguais.model.entity.TeachersEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITeacherRepository extends PagingAndSortingRepository<TeachersEntity,Integer> {
    @Query("FROM TeachersEntity t where t.name  LIKE CONCAT ('%',:filter,'%')   or t.surname LIKE CONCAT ('%',:filter,'%')")
    Page<TeachersEntity> findAllByNameOrSurname(String filter, Pageable pageable);

    @Query("SELECT count(t.idTeacher) from TeachersEntity t")
    int getTotalTeachers();
    
}
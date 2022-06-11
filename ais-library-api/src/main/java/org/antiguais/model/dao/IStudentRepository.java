package org.antiguais.model.dao;

import org.antiguais.model.entity.StudentsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IStudentRepository extends PagingAndSortingRepository<StudentsEntity,Integer> {
    @Query("FROM StudentsEntity s where s.name  LIKE CONCAT ('%',:filter,'%')   or s.surname LIKE CONCAT ('%',:filter,'%')")
    Page<StudentsEntity> findAllByNameOrSurname(String filter, Pageable pageable);

    @Query("SELECT count(s.idStudent) from StudentsEntity s")
    int getTotalStudents();
}

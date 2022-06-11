package org.antiguais.model.dao;

import org.antiguais.model.entity.LoansTeacherEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ILoansTeacherRepository extends PagingAndSortingRepository<LoansTeacherEntity,Integer> {
    @Query("select max(l.idLoanTeacher) FROM LoansTeacherEntity l ")
    public int getLastId();

    @Query("SELECT count(t.idLoanTeacher) from LoansTeacherEntity t")
    int getTotalLoansTeachers();
}

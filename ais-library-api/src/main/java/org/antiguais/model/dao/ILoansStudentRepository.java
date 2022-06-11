package org.antiguais.model.dao;

import org.antiguais.model.entity.LoansStudentEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ILoansStudentRepository extends PagingAndSortingRepository<LoansStudentEntity,Integer> {
    @Query("select max(l.idLoanStudent) FROM LoansStudentEntity l ")
    public int getLastId();

    @Query("SELECT count(t.idLoanStudent) from LoansStudentEntity t")
    int getTotalLoansStudents();
}

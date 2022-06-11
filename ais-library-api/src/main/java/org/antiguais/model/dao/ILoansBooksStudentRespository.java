package org.antiguais.model.dao;

import org.antiguais.model.entity.LoansBooksStudentEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.scheduling.annotation.Async;

public interface ILoansBooksStudentRespository extends PagingAndSortingRepository<LoansBooksStudentEntity,Integer> {
    @Override
            @Async
    <S extends LoansBooksStudentEntity> S save(S s);
}

package org.antiguais.model.dao;

import org.antiguais.model.entity.LoansBooksTeacherEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

@Repository
public interface ILoansBooksTeacherRepository extends PagingAndSortingRepository<LoansBooksTeacherEntity,Integer> {
    @Override
            @Async
    <S extends LoansBooksTeacherEntity> S save(S s);    
}

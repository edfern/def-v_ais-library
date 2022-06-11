package org.antiguais.model.dao;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.TestBookEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAuthorCategoryDao extends PagingAndSortingRepository<AuthorCatetoryEntity, Integer> {
    @Query("FROM AuthorCatetoryEntity a order by a.idBook desc ")
    Page<AuthorCatetoryEntity> viewBookAuthorCategory(Pageable pageable);

    @Query("FROM AuthorCatetoryEntity s where s.name  LIKE CONCAT ('%',:filter,'%') " +
            "or s.isbn  LIKE CONCAT ('%',:filter,'%') " +
            "or s.isbn2  LIKE CONCAT ('%',:filter,'%')")
    Page<AuthorCatetoryEntity> findAllByName(String filter, Pageable pageable);

}

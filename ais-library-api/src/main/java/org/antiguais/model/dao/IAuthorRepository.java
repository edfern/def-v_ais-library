package org.antiguais.model.dao;

import org.antiguais.model.entity.AuthorsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IAuthorRepository extends PagingAndSortingRepository<AuthorsEntity,Integer> {

    @Query("FROM AuthorsEntity a order by a.idAuthor")
    Page<AuthorsEntity> findAllAuthor(Pageable pageable);

    @Query("FROM AuthorsEntity a where a.name  LIKE CONCAT ('%',:filter,'%') ")
    Page<AuthorsEntity> searchAuthor(String filter, Pageable pageable);

    @Query("select a.name FROM AuthorsEntity  a where a.idAuthor = :id ")
    String searchNameAuthor(int id);
}

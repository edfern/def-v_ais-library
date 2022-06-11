package org.antiguais.model.dao;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.BooksEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IBookRepository extends PagingAndSortingRepository<AuthorCatetoryEntity,Integer> {

    @Query("FROM AuthorCatetoryEntity s where s.name = :filter ")
    AuthorCatetoryEntity matchByName(String filter);

    @Query("FROM AuthorCatetoryEntity s where s.isbn = :filter ")
    AuthorCatetoryEntity matchByIsbn(String filter);

    @Query("FROM AuthorCatetoryEntity s where s.isbn2 = :filter ")
    AuthorCatetoryEntity matchByIsbn2(String filter);

    @Query("FROM AuthorCatetoryEntity s order by s.idBook DESC ")
    Page<AuthorCatetoryEntity> mostRecents(Pageable pageable);

    @Query("SELECT count(b.idBook) from AuthorCatetoryEntity b")
    int getTotalBooks();


}

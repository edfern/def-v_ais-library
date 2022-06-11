package org.antiguais.model.dao;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IBookJoinsRepository extends PagingAndSortingRepository<AuthorCatetoryEntity,Integer> {
    /*@Query("SELECT b.idBook,b.countryInfo,b.languageInfo,b.isbn,b.isbn2,b.idAuthor,b.name,b.bookStatus,b.idCategory,b.url,a.name,c.category FROM BooksEntity b, AuthorsEntity a, CategoriesEntity c " +
            " where b.idAuthor = a.idAuthor" +
            " and b.idCategory = c.idCategory")
    Page<BooksAuthorEntity> viewBookAuthorCategory(Pageable pageable);*/

    @Query("FROM AuthorCatetoryEntity a order by a.idBook desc ")
    Page<AuthorCatetoryEntity> viewBookAuthorCategory(Pageable pageable);
}

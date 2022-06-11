package org.antiguais.model.dao;

import org.antiguais.model.entity.AuthorsEntity;
import org.antiguais.model.entity.CategoriesEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ICategoryRespository extends PagingAndSortingRepository<CategoriesEntity,Integer> {

    @Query("FROM CategoriesEntity c order by c.idCategory")
    Page<CategoriesEntity> findAllCategories(Pageable pageable);

    @Query("FROM CategoriesEntity c where c.category  LIKE CONCAT ('%',:filter,'%') ")
    Page<CategoriesEntity> searchCategory(String filter, Pageable pageable);
}

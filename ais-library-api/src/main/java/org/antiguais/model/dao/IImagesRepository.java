package org.antiguais.model.dao;

import org.antiguais.model.entity.ImagesEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagesRepository extends PagingAndSortingRepository<ImagesEntity, Integer> {

}


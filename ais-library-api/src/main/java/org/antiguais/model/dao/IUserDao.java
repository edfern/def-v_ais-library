package org.antiguais.model.dao;

import org.antiguais.model.entity.UsersLoginEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDao extends PagingAndSortingRepository<UsersLoginEntity,Integer> {
    @Query("from UsersLoginEntity u where u.email = :email and u.pass = :password")
    UsersLoginEntity getUser(String email, String password);
}

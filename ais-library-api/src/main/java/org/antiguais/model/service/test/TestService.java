package org.antiguais.model.service.test;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dao.IAuthorCategoryDao;
import org.antiguais.model.dto.ResponseTest;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TestService {


    @Autowired
    IAuthorCategoryDao test;

    public ResponseDto getAuthorCategory(){
        Pageable pageWithsize = PageRequest.of(0,10);
        Page<AuthorCatetoryEntity> result = this.test.viewBookAuthorCategory(pageWithsize);
        AuthorCatetoryEntity entity = new AuthorCatetoryEntity();
        List<AuthorCatetoryEntity> list = null;

        return new ResponseTest(result.getContent());
    }
}

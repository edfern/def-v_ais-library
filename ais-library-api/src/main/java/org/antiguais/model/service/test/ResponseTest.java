package org.antiguais.model.service.test;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;

import javax.persistence.EntityManager;
import java.util.List;

public class ResponseTest extends ResponseDto {
    private List<AuthorCatetoryEntity> list;

    public List<AuthorCatetoryEntity> getList() {
        return list;
    }

    public ResponseTest(List<AuthorCatetoryEntity> list) {
        this.list = list;
    }
}

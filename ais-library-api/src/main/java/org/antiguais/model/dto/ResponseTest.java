package org.antiguais.model.dto;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.TestBookEntity;

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

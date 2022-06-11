package org.antiguais.model.service.book;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;

import javax.servlet.http.HttpServletRequest;

public interface IBookService {
    public ResponseDto crudOperation(AuthorCatetoryEntity entity);
}

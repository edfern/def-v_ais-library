package org.antiguais.model.service.specimens;

import org.antiguais.model.dto.ResponseDto;

import javax.servlet.http.HttpServletRequest;

public interface ISpecimensCrudService {
    public ResponseDto crudOperation(HttpServletRequest request);
}

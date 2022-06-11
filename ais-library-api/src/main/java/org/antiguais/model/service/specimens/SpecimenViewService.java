package org.antiguais.model.service.specimens;

import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.ResponseDto;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;

public class SpecimenViewService implements ISpecimensCrudService{

    @Autowired
    ISpecimensRepository specimensRepository;


    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        return null;
    }
}

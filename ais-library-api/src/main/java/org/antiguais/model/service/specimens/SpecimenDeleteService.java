package org.antiguais.model.service.specimens;

import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;


@Service
public class SpecimenDeleteService implements ISpecimensCrudService{

    @Autowired
    ISpecimensRepository specimensRepository;

    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        try {
            validateParams(request);
            specimensRepository.deleteById(Integer.parseInt(request.getParameter("id_specimen")));
            return new ResponseSuccessDto(200, DELETE_SUCCESS);
        }catch (CustomException e){
            return new ResponseFailDto(e.getStatus(), e.getMessage());
        }catch (EmptyResultDataAccessException ex){
            return new ResponseFailDto(500, "no se ha encontrado al ejemplar solicitado en la base de datos");
        }
    }

    private void validateParams(HttpServletRequest request){
        if (request.getParameter("id_specimen") == null || request.getParameter("id_specimen").isEmpty()){
            throw new CustomException(400, "se necesita el id del libro");
        }
    }
}


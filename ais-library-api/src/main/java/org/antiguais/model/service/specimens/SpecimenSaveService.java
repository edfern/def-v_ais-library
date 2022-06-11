package org.antiguais.model.service.specimens;

import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.SpecimensEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;


@Service
public class SpecimenSaveService implements ISpecimensCrudService{

    @Autowired
    ISpecimensRepository specimensRepository;

    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        try{
            validateParams(request);
            SpecimensEntity specimensEntity = new SpecimensEntity();
            specimensEntity.setIdBook(Integer.parseInt(request.getParameter("id_book")));
            specimensEntity.setStock(Integer.parseInt(request.getParameter("stock")));
            specimensRepository.save(specimensEntity);
            return new ResponseSuccessDto(200,"se ingreso el specimens correctamente");
        }catch (CustomException customException){
            return new ResponseFailDto(customException.getStatus(),customException.getMessage());
        }
    }

    private void validateParams(HttpServletRequest request){
        if (request.getParameter("id_book") == null || request.getParameter("id_book").isEmpty()){
            throw new CustomException(400, "se necesita el id del libro");
        }
        if (request.getParameter("stock") == null || request.getParameter("stock").isEmpty()){
            throw new CustomException(400, "se necesita el id del libro");
        }
    }
}

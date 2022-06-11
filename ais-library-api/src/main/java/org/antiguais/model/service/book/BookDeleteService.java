package org.antiguais.model.service.book;

import org.antiguais.model.dao.IBookRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;


@Service
public class BookDeleteService implements IBookService{
    @Autowired
    IBookRepository bookRepository;

    @Override
    public ResponseDto crudOperation(AuthorCatetoryEntity entity) {


        try{
            validateParams(entity);
            bookRepository.deleteById(entity.getIdBook());
            return new ResponseSuccessDto(200,SUCCESS);
        }catch (CustomException e){
            return new ResponseFailDto(500, "NO se puede Borrar el libro");
        }catch (EmptyResultDataAccessException ex){
            return new ResponseFailDto(500, "No existe el id solicitado.");
        }
    }
    
    

    public void validateParams(AuthorCatetoryEntity entity){
        if(entity.getIdBook()<=0){
            throw new CustomException(400, String.format(NOT_PARAMERS,"id"));
        }
    }

}

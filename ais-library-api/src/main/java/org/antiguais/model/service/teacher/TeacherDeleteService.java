package org.antiguais.model.service.teacher;

import javax.servlet.http.HttpServletRequest;
import org.antiguais.model.dao.ITeacherRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;

@Service
public class TeacherDeleteService implements ITeacherService{
    
    @Autowired
    ITeacherRepository teacherRepository;

    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        
        try {
            validateParams(request);
            teacherRepository.deleteById(Integer.parseInt(request.getParameter("id")));
            return new ResponseSuccessDto(200, DELETE_SUCCESS);
        }catch (CustomException e){
            return new ResponseFailDto(e.getStatus(), e.getMessage());
        }catch (EmptyResultDataAccessException ex){
            return new ResponseFailDto(400, String.format(NOT_PERSON,TEACHER));
        }
        
    }
    
    public void validateParams(HttpServletRequest request){
        if(request.getParameter("id")==null || request.getParameter("id").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,"id"));
        }
    }
    
}

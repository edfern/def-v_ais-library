
package org.antiguais.model.service.teacher;

import javax.servlet.http.HttpServletRequest;
import org.antiguais.model.dao.ITeacherRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.TeachersEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;

@Service
public class TeacherSaveService implements ITeacherService{
    
    @Autowired
    ITeacherRepository teacherRepository;

    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        
        TeachersEntity teacherEntity = new TeachersEntity();
        
        try {
            validateParams(request);
            
                teacherEntity.setName(request.getParameter("name"));
                teacherEntity.setSurname(request.getParameter("surname"));
                teacherEntity.setEmail(request.getParameter("email"));
                teacherRepository.save(teacherEntity);
                
                return new ResponseSuccessDto(200,SAVE_SUCCESS);
        } catch (CustomException ex) {
            return new ResponseFailDto(ex.getStatus(),ex.getMessage());
        }
        
        
    }
    
    
     public void validateParams(HttpServletRequest request){
        
        if(request.getParameter("name")==null || request.getParameter("name").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,"nombre"));
        }
        
        if(request.getParameter("surname")==null || request.getParameter("surname").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,"apellido"));
        }
        
        if(request.getParameter("email")==null || request.getParameter("email").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,"correo"));
        }
    
     }
}

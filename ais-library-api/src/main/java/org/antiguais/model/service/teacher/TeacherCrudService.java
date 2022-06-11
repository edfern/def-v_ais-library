package org.antiguais.model.service.teacher;

import javax.servlet.http.HttpServletRequest;
import org.antiguais.model.dto.ResponseDto;
import org.springframework.stereotype.Service;

@Service
public class TeacherCrudService {
    
    public ResponseDto selectCrudOperation(ITeacherService teacherService, HttpServletRequest request){
        return teacherService.crudOperation(request);
    }
    
}

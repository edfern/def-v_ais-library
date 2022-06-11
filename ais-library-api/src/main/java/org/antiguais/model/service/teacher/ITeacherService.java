package org.antiguais.model.service.teacher;

import javax.servlet.http.HttpServletRequest;
import org.antiguais.model.dto.ResponseDto;

public interface ITeacherService {
    
    public ResponseDto crudOperation(HttpServletRequest request);
    
}

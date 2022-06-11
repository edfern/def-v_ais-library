package org.antiguais.model.service.specimens;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class SpecimenNullService implements ISpecimensCrudService{
    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {
        return new ResponseFailDto(400,"El tipo de operacion no es soportado, es null o esta vacio");
    }
}

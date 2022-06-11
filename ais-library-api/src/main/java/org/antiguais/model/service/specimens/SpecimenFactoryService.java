package org.antiguais.model.service.specimens;


import org.antiguais.model.dto.ResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Locale;

@Component
public class SpecimenFactoryService {

    @Autowired
    SpecimenSaveService specimenSaveService;

    @Autowired
    SpecimenNullService specimenNullService;

    @Autowired
    SpecimenDeleteService specimenDeleteService;

    @Autowired
    SpecimenUpdateService specimenUpdateService;

    public ResponseDto specimentOperation(HttpServletRequest request, String type){

        switch (type.toUpperCase(Locale.ROOT)){
            case "SAVE":
                return specimenSaveService.crudOperation(request);
            case "UPDATE":
                return specimenUpdateService.crudOperation(request);
            case "DELETE":
                return specimenDeleteService.crudOperation(request);
            default:
                return specimenNullService.crudOperation(request);
        }
    }
}

package org.antiguais.controller;


import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.service.specimens.SpecimenFactoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SpecimenController {

    @Autowired
    SpecimenFactoryService specimenFactoryService;


    @RequestMapping(value = "specimen/save", method = RequestMethod.POST, produces = "application/json")
    public ResponseDto save(HttpServletRequest request){
        return specimenFactoryService.specimentOperation(request,"save");
    }

    @RequestMapping(value = "specimen/update", method = RequestMethod.PUT, produces = "application/json")
    public ResponseDto update(HttpServletRequest request){
        return specimenFactoryService.specimentOperation(request,"update");
    }

    @RequestMapping(value = "specimen/delete", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseDto delete(HttpServletRequest request){
        return specimenFactoryService.specimentOperation(request,"delete");
    }

}

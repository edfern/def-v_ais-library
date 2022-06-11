package org.antiguais.controller;

import org.antiguais.model.service.test.TestService;
import org.antiguais.model.dto.ResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    TestService service;

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public ResponseDto getTest(){
        return service.getAuthorCategory();
    }
}

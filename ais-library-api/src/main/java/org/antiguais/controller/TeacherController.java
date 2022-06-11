package org.antiguais.controller;

import javax.servlet.http.HttpServletRequest;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.teacher.TeacherCrudService;
import org.antiguais.model.service.teacher.TeacherDeleteService;
import org.antiguais.model.service.teacher.TeacherSaveService;
import org.antiguais.model.service.teacher.TeacherUpDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TeacherController {

    @Autowired
    TeacherCrudService teacherCrudService;

    @Autowired
    TeacherSaveService teacherSaveService;

    @Autowired
    TeacherUpDateService teacherUpdateService;

    @Autowired
    TeacherDeleteService teacherDeleteService;

    @CrossOrigin
    @RequestMapping(value = "/teacher/save", method = RequestMethod.POST, produces = "application/json")
    public ResponseDto saveTeacher(HttpServletRequest request) throws CustomException {
        return teacherCrudService.selectCrudOperation(teacherSaveService, request);
    }

    @CrossOrigin
    @RequestMapping(value = "/teacher/update", method = RequestMethod.PUT, produces = "application/json")
    public ResponseDto updateTeacher(HttpServletRequest request) throws CustomException {
        return teacherCrudService.selectCrudOperation(teacherUpdateService,request);
    }

    @CrossOrigin
    @RequestMapping(value = "/teacher/delete", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseDto deleteBook(HttpServletRequest request) throws CustomException {
        return teacherCrudService.selectCrudOperation(teacherDeleteService,request);
    }

}

package org.antiguais.controller;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class StudentController {

    @Autowired
    StudentService service;

    @CrossOrigin
    @RequestMapping(value = "/student/save", method = RequestMethod.POST)
    public ResponseDto saveStudent(HttpServletRequest request) throws CustomException {
        return service.saveStudent(request);
    }

    @CrossOrigin
    @RequestMapping(value = "/student/edit", method = RequestMethod.PUT)
    public ResponseDto putStudent(HttpServletRequest request) throws CustomException {
        return service.editStudent(request);
    }

    @CrossOrigin
    @RequestMapping(value = "/student/{id}", method = RequestMethod.DELETE)
    public ResponseDto deleteStudent(@PathVariable("id") int id) throws CustomException {
        return service.deleteStudent(id);
    }



}

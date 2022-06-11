package org.antiguais.controller;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.author.AuthorCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class AuthorController {

    @Autowired
    AuthorCrudService authorCrudService;

    @RequestMapping(value = "/author/view", method = RequestMethod.GET, produces = "application/json")
    public ResponseDto viewAuthors(HttpServletRequest request) throws CustomException {
        return authorCrudService.findAllAuthors(request);
    }
    @RequestMapping(value = "/author/search", method = RequestMethod.GET, produces = "application/json")
    public ResponseDto searchAuthors(HttpServletRequest request) throws CustomException {
        return authorCrudService.searchAuthor(request);
    }
}

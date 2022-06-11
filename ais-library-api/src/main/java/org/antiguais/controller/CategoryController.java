package org.antiguais.controller;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.category.CategoryCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class CategoryController {
    @Autowired
    CategoryCrudService categoryCrudService;

    @RequestMapping(value = "/category/view", method = RequestMethod.GET, produces = "application/json")
    public ResponseDto viewAuthors(HttpServletRequest request) throws CustomException {
        return categoryCrudService.findAllCategories(request);
    }
    @RequestMapping(value = "/category/search", method = RequestMethod.GET, produces = "application/json")
    public ResponseDto searchAuthors(HttpServletRequest request) throws CustomException {
        return categoryCrudService.searchCategory(request);
    }
}

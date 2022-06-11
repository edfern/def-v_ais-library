package org.antiguais.controller;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.search.ISearchService;
import org.antiguais.model.service.search.SearchFactoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController()
public class SearchController {

    //@Autowired
    //SearchStudentService searchStudentService;

    @Autowired
    SearchFactoryService searchFactoryService = new SearchFactoryService();

    @RequestMapping(value = "/search", method = RequestMethod.GET, produces = "*/*")
    public ResponseDto search(HttpServletRequest request) throws CustomException {
        ISearchService searchService = searchFactoryService.getSearch(request);
        return searchService.searchService(request);
    }
}

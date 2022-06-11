package org.antiguais.model.service.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.servlet.http.HttpServletRequest;

@Component
public class SearchFactoryService {

    @Autowired
    SearchStudentService searchStudentService;
    @Autowired
    SearchBookService searchBookService;
    @Autowired
    SearchTeacherService searchTeacherService;
    @Autowired
    SearchNullService searchNullService;
    @Autowired
    SearchSpecimenService searchSpecimenService;

    public ISearchService getSearch(HttpServletRequest request){
        if(request.getParameter("filter") == null){
            return  searchNullService;
        }
        if(request.getParameter("filter").isEmpty()){
            return searchNullService;
        }

        switch (request.getParameter("filter")){
            case "students":
                return searchStudentService;
            case "teachers":
                return searchTeacherService;
            case "books":
                return searchBookService;
            case "specimens":
                return searchSpecimenService;
            default:
                return searchNullService;
        }

    }
}

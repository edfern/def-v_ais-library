package org.antiguais.model.service.category;

import org.antiguais.model.dao.ICategoryRespository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseCategoryDto;
import org.antiguais.model.entity.CategoriesEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;
import static org.antiguais.model.globalmessagess.GlobalMessagess.QUERY;

@Service
public class CategoryCrudService {

    @Autowired
    ICategoryRespository categoryRespository;


    public ResponseDto findAllCategories(HttpServletRequest request){
        try {
            validateParams(request);

            Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));
            Page<CategoriesEntity> allCategories =
                    this.categoryRespository.findAllCategories(pageWithsize);


            if(allCategories.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseCategoryDto(
                    200,SUCCESS
                    ,allCategories.getNumber()
                    ,allCategories.getTotalPages()
                    ,allCategories.getSize()
                    , allCategories.getContent());

        }catch (CustomException ex){
            return new ResponseFailDto(ex.getStatus(),ex.getMessage());
        }
    }

    private void validateParams(HttpServletRequest request) {

        if(request.getParameter("page") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,PAGE));
        }
        if(request.getParameter("sizePage") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,SIZEPAGE));
        }
    }

    public ResponseDto searchCategory(HttpServletRequest request) throws CustomException {

        try {
            validateSearcgParams(request);
            Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));

            Page<CategoriesEntity> categoriesEntities =
                    this.categoryRespository.searchCategory(request.getParameter("query"),pageWithsize);

            if (categoriesEntities.getContent().isEmpty()){
                return new ResponseFailDto(500,NO_DATA_FOUND);
            }


            return new ResponseCategoryDto(
                    200,SUCCESS
                    ,categoriesEntities.getNumber()
                    ,categoriesEntities.getTotalPages()
                    ,categoriesEntities.getSize()
                    ,categoriesEntities.getContent());

        }catch (CustomException ex){
            return new ResponseFailDto(ex.getStatus(),ex.getMessage());
        }
    }

    private void validateSearcgParams(HttpServletRequest request) {

        if(request.getParameter("page") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,PAGE));
        }
        if(request.getParameter("sizePage") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,SIZEPAGE));
        }
        if(request.getParameter("query") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,QUERY));
        }
    }
}

package org.antiguais.model.service.search;

import org.antiguais.model.dao.IAuthorCategoryDao;
import org.antiguais.model.dto.ResponseBookDto;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;
import static org.antiguais.model.globalmessagess.GlobalMessagess.NO_DATA_FOUND;

@Service
public class SearchBookService implements  ISearchService{
    @Autowired
    IAuthorCategoryDao bookRepository;


    @Override
    public ResponseDto searchService(HttpServletRequest request) throws CustomException {
        validateParams(request);

        Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));
        try {

            Page<AuthorCatetoryEntity> bookRepositoryAllByName =
                    this.bookRepository.findAllByName(request.getParameter("query"),pageWithsize);


            if(bookRepositoryAllByName.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseBookDto(
                    200,SUCCESS
                    ,bookRepositoryAllByName.getNumber()
                    ,bookRepositoryAllByName.getTotalPages()
                    ,bookRepositoryAllByName.getSize()
                    ,bookRepositoryAllByName.getContent());

        }catch (CustomException ex){
            return new ResponseFailDto(205,NO_DATA_FOUND);
        }
    }

    private void validateParams(HttpServletRequest request) {

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

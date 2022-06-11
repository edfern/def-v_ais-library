package org.antiguais.model.service.author;

import org.antiguais.model.dao.IAuthorRepository;
import org.antiguais.model.dto.ResponseAuthorDto;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.entity.AuthorsEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;
import static org.antiguais.model.globalmessagess.GlobalMessagess.SIZEPAGE;

@Service
public class AuthorCrudService {

    @Autowired
    IAuthorRepository authorRepository;


    public ResponseDto findAllAuthors(HttpServletRequest request){
        try {
            validateParams(request);

            Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));
            Page<AuthorsEntity> allAuthors =
                    this.authorRepository.findAllAuthor(pageWithsize);


            if(allAuthors.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseAuthorDto(
                    200,SUCCESS
                    ,allAuthors.getNumber()
                    ,allAuthors.getTotalPages()
                    ,allAuthors.getSize()
                    ,allAuthors.getContent());

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

    public ResponseDto searchAuthor(HttpServletRequest request) throws CustomException {

        try {
            validateSearcgParams(request);
            Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));

            Page<AuthorsEntity> authorsEntities =
                    this.authorRepository.searchAuthor(request.getParameter("query"),pageWithsize);


            if (authorsEntities.getContent().isEmpty()){
                return new ResponseFailDto(500,NO_DATA_FOUND);
            }

            return new ResponseAuthorDto(
                    200,SUCCESS
                    ,authorsEntities.getNumber()
                    ,authorsEntities.getTotalPages()
                    ,authorsEntities.getSize()
                    ,authorsEntities.getContent());

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

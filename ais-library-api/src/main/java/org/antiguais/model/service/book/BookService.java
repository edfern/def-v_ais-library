package org.antiguais.model.service.book;

import org.antiguais.model.dao.IBookJoinsRepository;
import org.antiguais.model.dao.IBookRepository;
import org.antiguais.model.dto.ResponseBookQueryDto;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.BooksEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;
import static org.antiguais.model.globalmessagess.GlobalMessagess.SIZEPAGE;

@Component
public class BookService {

    @Autowired
    IBookRepository bookRepository;

    @Autowired
    IBookJoinsRepository bookJoinsRepository;

    public ResponseDto selectCrudOperation(IBookService bookService, AuthorCatetoryEntity entity){
        return bookService.crudOperation(entity);
    }

    public ResponseDto getBooksRecent(HttpServletRequest request){
        Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));
        try {

            Page<AuthorCatetoryEntity> mostRecents =
                    this.bookRepository.mostRecents(pageWithsize);

            Page<AuthorCatetoryEntity> booksAuthorEntity = bookJoinsRepository.viewBookAuthorCategory(pageWithsize);

            if(mostRecents.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseBookQueryDto(
                    200,SUCCESS
                    ,booksAuthorEntity.getNumber()
                    ,booksAuthorEntity.getTotalPages()
                    ,booksAuthorEntity.getSize()
                    ,booksAuthorEntity.getContent());

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
    }
}

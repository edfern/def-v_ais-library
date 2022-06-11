package org.antiguais.controller;


import org.antiguais.model.dao.IAuthorCategoryDao;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.book.*;
import org.antiguais.model.service.files.UploadFileImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class BookController {
    @Autowired
    BookService bookCrudService;

    @Autowired
    BookSaveService bookSaveService;

    @Autowired
    BookUpdateService bookUpdateService;

    @Autowired
    BookDeleteService bookDeleteService;

    @Autowired
    UploadFileImage uploadFileImage;

    @Autowired
    IAuthorCategoryDao dao;

    @CrossOrigin
    @RequestMapping(value = "/book/save", method = RequestMethod.POST, produces = "*/*")
    public ResponseDto saveBook(@RequestBody AuthorCatetoryEntity book) throws CustomException {
        return bookCrudService.selectCrudOperation(bookSaveService, book);

    }

    @CrossOrigin
    @RequestMapping(value = "/book/update", method = RequestMethod.PUT, produces = "application/json")
    public ResponseDto updateBook(@RequestBody AuthorCatetoryEntity book) throws CustomException {
        return bookCrudService.selectCrudOperation(bookUpdateService, book);
    }

    @CrossOrigin
    @RequestMapping(value = "/book/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseDto deleteBook(@PathVariable("id") int id) throws CustomException {
        AuthorCatetoryEntity entity = new AuthorCatetoryEntity();
        entity.setIdBook(id);
        return bookCrudService.selectCrudOperation(bookDeleteService, entity);
    }

    @CrossOrigin
    @RequestMapping(value = "/book/view", method = RequestMethod.GET, produces = "application/json")
    public ResponseDto viewBooks(HttpServletRequest request) throws CustomException {

        return bookCrudService.getBooksRecent(request);
    }
}

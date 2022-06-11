package org.antiguais.model.service.book;

import org.antiguais.model.dao.IAuthorCategoryDao;
import org.antiguais.model.dao.IBookRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.BooksEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import static org.antiguais.model.globalmessagess.GlobalMessagess.*;


@Service
public class BookSaveService implements IBookService{

    @Autowired
    IAuthorCategoryDao bookAuthorCategoryRepository;

    @Autowired
    IBookRepository bookRepository;

    @Override
    public ResponseDto crudOperation(AuthorCatetoryEntity entity) {
        try {
            validateIfAlreadyExist(entity);
            bookAuthorCategoryRepository.save(entity);

            return new ResponseSuccessDto(200,"success");
        }catch (CustomException ex){
            return new ResponseFailDto(400,ex.getMessage());
        }
    }

    public void validateIfAlreadyExist(AuthorCatetoryEntity book){

        if (bookRepository.matchByName(book.getName()) != null){
            System.out.println(bookRepository.matchByName(book.getName()));
                throw new CustomException(400, BOOK_ALREADY_EXIST + "con ese nombre");
        }else{
            if (bookRepository.matchByIsbn(book.getIsbn()) != null){
                System.out.println(bookRepository.matchByIsbn(book.getIsbn()));
                    throw new CustomException(400, BOOK_ALREADY_EXIST + "con ese isbn");
            }else{
                if (bookRepository.matchByIsbn2(book.getIsbn2()) != null){
                        throw new CustomException(400, BOOK_ALREADY_EXIST + "con ese isbn2");
                }
            }
        }

    }
}

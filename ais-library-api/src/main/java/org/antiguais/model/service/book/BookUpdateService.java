package org.antiguais.model.service.book;


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
public class BookUpdateService implements IBookService{

    @Autowired
    IBookRepository bookRepository;

    @Override
    public ResponseDto crudOperation(AuthorCatetoryEntity entity) {
        try {

            if (bookRepository.findById(entity.getIdBook()).isPresent()){
                bookRepository.save(entity);

                return new ResponseSuccessDto(200,String.format(CUSTOM_SUCCESS, "update."));
            }else{
                return new ResponseFailDto(400,"El libro no se puede acutlizar");
            }
        }catch (CustomException ex){
            return new ResponseFailDto(400,ex.getMessage());
        }
    }

}

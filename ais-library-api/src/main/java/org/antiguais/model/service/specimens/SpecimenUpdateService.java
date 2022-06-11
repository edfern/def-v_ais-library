package org.antiguais.model.service.specimens;

import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.BooksEntity;
import org.antiguais.model.entity.SpecimensEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.SUCCESS;


@Service
public class SpecimenUpdateService  implements ISpecimensCrudService{

    @Autowired
    ISpecimensRepository specimensRepository;

    @Override
    public ResponseDto crudOperation(HttpServletRequest request) {

        try {
            validateParams(request);
            SpecimensEntity specimensEntity = new SpecimensEntity();

            if (specimensRepository.findById(Integer.parseInt(request.getParameter("id_specimen"))).isPresent()){

                specimensEntity.setIdBook(Integer.parseInt(request.getParameter("id_book")));
                specimensEntity.setIdSpecimens(Integer.parseInt(request.getParameter("id_specimen")));
                specimensEntity.setStock(Integer.parseInt(request.getParameter("stock")));

                System.out.println(specimensEntity.getIdSpecimens());
                specimensRepository.save(specimensEntity);

                return new ResponseSuccessDto(200,SUCCESS);
            }else{
                return new ResponseFailDto(500,"El libro no se puede acutlizar");
            }
        }catch (CustomException ex){
            return new ResponseFailDto(ex.getStatus(),ex.getMessage());
        }
    }

    private void validateParams(HttpServletRequest request){
        if (request.getParameter("id_book") == null || request.getParameter("id_book").isEmpty()){
            throw new CustomException(400, "se necesita el id del libro");
        }
        if (request.getParameter("stock") == null || request.getParameter("stock").isEmpty()){
            throw new CustomException(400, "se necesita el id del libro");
        }
        if (request.getParameter("id_specimen") == null || request.getParameter("id_specimen").isEmpty()){
            throw new CustomException(400, "se necesita el id del ejemplar");
        }
    }
}

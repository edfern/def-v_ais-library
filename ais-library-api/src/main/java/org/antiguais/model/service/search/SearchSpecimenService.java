package org.antiguais.model.service.search;

import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.*;
import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.SpecimensEntity;
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
public class SearchSpecimenService implements ISearchService{


    @Autowired
    ISpecimensRepository specimensRepository;


    @Override
    public ResponseDto searchService(HttpServletRequest request) throws CustomException {
        validateParams(request);

        try {

            SpecimensEntity specimensRepositoryAllByName =
                    this.specimensRepository.findByIdBook(Integer.parseInt(request.getParameter("query")));

            return new ResponseSpecimenStokDto(
                    200,SUCCESS,specimensRepositoryAllByName);

        }catch (CustomException ex){
            return new ResponseFailDto(ex.getStatus(),ex.getMessage());
        }
    }

    private void validateParams(HttpServletRequest request) {
        if(request.getParameter("query") == null){
            throw new CustomException(400, String.format(NOT_PARAMERS,QUERY));
        }
    }
}

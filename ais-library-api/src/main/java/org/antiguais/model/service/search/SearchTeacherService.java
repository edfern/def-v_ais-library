package org.antiguais.model.service.search;

import org.antiguais.model.dao.ITeacherRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseStudent;
import org.antiguais.model.dto.ResponseTeacherDto;
import org.antiguais.model.entity.TeachersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;
import static org.antiguais.model.globalmessagess.GlobalMessagess.NO_DATA_FOUND;


@Service
public class SearchTeacherService implements ISearchService{

    @Autowired
    ITeacherRepository teacherRepository;


    @Override
    public ResponseDto searchService(HttpServletRequest request) {
        if(request.getParameter("page") == null){
            return new ResponseFailDto(205,NO_PATAMETERS + "page");
        }
        if(request.getParameter("sizePage") == null){
            return new ResponseFailDto(205,NO_PATAMETERS + "sizePage");
        }
        if(request.getParameter("query") == null){
            return new ResponseFailDto(205,NO_PATAMETERS + "query");
        }

        Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));
        try {
            Page<TeachersEntity> teacherRepositoryAllByNameOrSurname = this.teacherRepository.findAllByNameOrSurname(request.getParameter("query"),pageWithsize);
            if(teacherRepositoryAllByNameOrSurname.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseTeacherDto(200,SUCCESS,teacherRepositoryAllByNameOrSurname.getNumber(),teacherRepositoryAllByNameOrSurname.getTotalPages(),teacherRepositoryAllByNameOrSurname.getSize(),teacherRepositoryAllByNameOrSurname.getContent());

        }catch (Exception ex){
            return new ResponseFailDto(205,NO_DATA_FOUND);
        }
    }
}

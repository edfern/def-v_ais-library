package org.antiguais.model.service.search;

import org.antiguais.model.dao.IStudentRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseStudent;
import org.antiguais.model.entity.StudentsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;


import static org.antiguais.model.globalmessagess.GlobalMessagess.*;

@Service
public class SearchStudentService implements ISearchService{

    @Autowired
    IStudentRepository studentRepository;

    public ResponseStudent getStudents(HttpServletRequest request){

        Pageable pageWithsize = PageRequest.of(Integer.parseInt(request.getParameter("page")),Integer.parseInt(request.getParameter("sizePage")));

        Page<StudentsEntity> allStudent = studentRepository.findAll(pageWithsize);
        System.out.println(allStudent.getTotalPages());
        return new ResponseStudent(200,"success",allStudent.getNumber(),allStudent.getTotalPages(),Integer.parseInt(request.getParameter("sizePage")),allStudent.getContent());
    }

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
            Page<StudentsEntity> studentsMatchName = this.studentRepository.findAllByNameOrSurname(request.getParameter("query"),pageWithsize);
            if(studentsMatchName.getContent().isEmpty()){
                return new ResponseFailDto(205,NO_DATA_FOUND);
            }
            return new ResponseStudent(200,SUCCESS,studentsMatchName.getNumber(),studentsMatchName.getTotalPages(),studentsMatchName.getSize(),studentsMatchName.getContent());

        }catch (Exception ex){
            return new ResponseFailDto(205,NO_DATA_FOUND);
        }

    }
}
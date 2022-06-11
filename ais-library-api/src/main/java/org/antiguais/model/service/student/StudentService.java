package org.antiguais.model.service.student;

import org.antiguais.model.dao.IStudentRepository;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;

import org.antiguais.model.entity.StudentsEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;



@Service
public class StudentService {

    @Autowired
    IStudentRepository repositoryStudent;


    public ResponseDto saveStudent(HttpServletRequest request){
        StudentsEntity student = new StudentsEntity();

        try {
            validateParams(request);
            student.setName(request.getParameter("name"));
            student.setSurname(request.getParameter("surName"));
            student.setEmail(request.getParameter("email"));
            repositoryStudent.save(student);

            return new ResponseSuccessDto(200,SAVE_SUCCESS);
        }catch (CustomException ex){
            return new ResponseFailDto(400,ex.getMessage());
        }
    }

    public ResponseDto editStudent(HttpServletRequest request){

        StudentsEntity student = new StudentsEntity();
        try{
            validateId(request);
            validateParams(request);
            if(repositoryStudent.findById(Integer.parseInt(request.getParameter("id"))).isPresent()){
                student.setIdStudent(Integer.parseInt(request.getParameter("id")));
                student.setName(request.getParameter("name"));
                student.setSurname(request.getParameter("surName"));
                student.setEmail(request.getParameter("email"));
                repositoryStudent.save(student);
                return new ResponseSuccessDto(200,String.format(UPDATE_SUCCESS,STUDENT));
            }else{
                return new ResponseFailDto(400,String.format(NOT_PERSON,STUDENT));
            }

        }catch (CustomException ex){
            return new ResponseFailDto(400,ex.getMessage());
        }
    }

    public ResponseDto deleteStudent(int id){
        try {
            validateIdPathVariable(id);
            if(repositoryStudent.findById(id).isPresent()){
                this.repositoryStudent.deleteById(id);
                return new ResponseSuccessDto(200,DELETE_SUCCESS);
            }else{
                return new ResponseFailDto(400, NOT_ID);
            }
        }catch (CustomException ex){
            return new ResponseFailDto(400,ex.getMessage());
        }
    }

    public void validateParams(HttpServletRequest request){
        if(request.getParameter("name")==null || request.getParameter("name").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,NAME));
        }
        if(request.getParameter("surName")==null || request.getParameter("surName").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,SURNAME));
        }
        if(request.getParameter("email")==null || request.getParameter("email").isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,EMAIL));
        }
    }

    public void validateId(HttpServletRequest request){
        if(request.getParameter(ID)==null || request.getParameter(ID).isEmpty()){
            throw new CustomException(400, String.format(NOT_PARAMERS,ID));
        }
    }
    public void validateIdPathVariable(int id){
        if(id <= 0){
            throw new CustomException(400, String.format(NOT_PARAMERS,ID));
        }
    }
}

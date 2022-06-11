package org.antiguais.model.service.stadistics;


import org.antiguais.model.dao.*;
import org.antiguais.model.dto.stadistics.StadisticsDto;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StadisticsService {

    @Autowired
    IBookRepository bookRepository;
    @Autowired
    ILoansTeacherRepository loansTeacherRepository;
    @Autowired
    ILoansStudentRepository loansStudentRepository;
    @Autowired
    IStudentRepository studentRepository;
    @Autowired
    ITeacherRepository teacherRepository;



    public StadisticsDto getStadisctics(){
        try{
            int students = studentRepository.getTotalStudents();
            int teachers = teacherRepository.getTotalTeachers();
            int books = bookRepository.getTotalBooks();
            int loans = loansStudentRepository.getTotalLoansStudents() + loansTeacherRepository.getTotalLoansTeachers();

        }catch (CustomException exception){

        }
        return null;
    }
}

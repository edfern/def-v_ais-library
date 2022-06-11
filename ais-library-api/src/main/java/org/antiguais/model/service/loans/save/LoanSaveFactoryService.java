package org.antiguais.model.service.loans.save;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Locale;


@Component
public class LoanSaveFactoryService {

    @Autowired
    LoansBookStudentService loansBookStudentService;

    @Autowired
    LoansBookNullService loansBookNullService;

    @Autowired
    LoansBookTeacherService loansBookTeacherService;


    public ResponseDto saveLoansBookTeacherService(LoanBookManagerDto loanBookManagerDto){
        if (loanBookManagerDto.getTypeUser().isEmpty() || loanBookManagerDto.getTypeUser() ==null){
            return loansBookNullService.saveLoan(loanBookManagerDto);
        }

        switch (loanBookManagerDto.getTypeUser().toUpperCase(Locale.ROOT)){
            case "STUDENTS":
                return loansBookStudentService.saveLoan(loanBookManagerDto);
            case "TEACHERS":
                return loansBookTeacherService.saveLoan(loanBookManagerDto);
            default:
                return loansBookNullService.saveLoan(loanBookManagerDto);

        }
    }
}

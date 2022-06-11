package org.antiguais.model.service.loans.delete;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Locale;


@Component
public class LoanDeleteFactoryService {

    @Autowired
    LoanDeleteNullService loanDeleteNullService;

    @Autowired
    LoanDeleteStudentService loanDeleteStudentService;

    @Autowired
    LoanDeleteTeacherService loanDeleteTeacherService;


    public ResponseDto deleteLoansBookService(LoanBookManagerDto loanBookManagerDto){
        if (loanBookManagerDto.getTypeUser().isEmpty() || loanBookManagerDto.getTypeUser() ==null){
            return loanDeleteNullService.deleteLoan(loanBookManagerDto);
        }

        switch (loanBookManagerDto.getTypeUser().toUpperCase(Locale.ROOT)){
            case "STUDENT":
                return loanDeleteStudentService.deleteLoan(loanBookManagerDto);
            case "TEACHER":
                return loanDeleteTeacherService.deleteLoan(loanBookManagerDto);
            default:
                return loanDeleteNullService.deleteLoan(loanBookManagerDto);

        }
    }
}

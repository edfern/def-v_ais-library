package org.antiguais.model.service.loans.update;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class LoanUpdateFactoryService {

    @Autowired
    LoanUpdateTeacherService loanUpdateTeacherService;

    @Autowired
    LoanUpdateStudentService loanUpdateStudentService;

    @Autowired
    LoanUpdateNullService  loanUpdateNullService;


    public ResponseDto updateLoansBookService(LoanBookManagerDto loanBookManagerDto){
        if (loanBookManagerDto.getTypeUser().isEmpty() || loanBookManagerDto.getTypeUser() ==null){
            return loanUpdateNullService.updateLoan(loanBookManagerDto);
        }

        switch (loanBookManagerDto.getTypeUser().toUpperCase(Locale.ROOT)){
            case "STUDENT":
                return loanUpdateStudentService.updateLoan(loanBookManagerDto);
            case "TEACHER":
                return loanUpdateTeacherService.updateLoan(loanBookManagerDto);
            default:
                return loanUpdateNullService.updateLoan(loanBookManagerDto);

        }

    }
}

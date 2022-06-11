package org.antiguais.controller;


import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.service.loans.delete.LoanDeleteFactoryService;
import org.antiguais.model.service.loans.save.LoanSaveFactoryService;
import org.antiguais.model.service.loans.update.LoanUpdateFactoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoansController {


    @Autowired
    LoanSaveFactoryService loanSaveFactoryService;

    @Autowired
    LoanUpdateFactoryService loanUpdateFactoryService;

    @Autowired
    LoanDeleteFactoryService loanDeleteFactoryService;

    @RequestMapping(value = "/loans/save", method = RequestMethod.POST, produces = "application/json")
    public ResponseDto saveLoanBookTeacher (@RequestBody LoanBookManagerDto request){
        return loanSaveFactoryService.saveLoansBookTeacherService(request);
    }

    @RequestMapping(value = "/loans/update", method = RequestMethod.PUT, produces = "application/json")
    public ResponseDto updateLoanBookTeacher (@RequestBody LoanBookManagerDto request){
        return loanUpdateFactoryService.updateLoansBookService(request);
    }

    @RequestMapping(value = "/loans/delete", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseDto deleteLoanBookTeacher (@RequestBody LoanBookManagerDto request){
        return loanDeleteFactoryService.deleteLoansBookService(request);
    }
}

package org.antiguais.model.service.loans.update;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.loan.LoanUserDto;

public interface IUpdateLoanService {
    public ResponseDto updateLoan(LoanBookManagerDto loanBookManagerDto);
}

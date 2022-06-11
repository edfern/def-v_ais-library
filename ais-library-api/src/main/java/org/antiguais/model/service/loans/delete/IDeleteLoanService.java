package org.antiguais.model.service.loans.delete;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;

public interface IDeleteLoanService {
    public ResponseDto deleteLoan(LoanBookManagerDto loanBookManagerDto);
}

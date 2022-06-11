package org.antiguais.model.service.loans.save;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;

public interface ISaveLoansBookTeacherService {
    public ResponseDto saveLoan(LoanBookManagerDto loanBookManagerDto);
}

package org.antiguais.model.service.loans.delete;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.springframework.stereotype.Service;


@Service
public class LoanDeleteNullService implements IDeleteLoanService{
    @Override
    public ResponseDto deleteLoan(LoanBookManagerDto loanBookManagerDto) {
        return new ResponseFailDto(400,"El id del prestamo no es valido o esta vacio");
    }
}

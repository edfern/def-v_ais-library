package org.antiguais.model.service.loans.update;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.loan.LoanUserDto;
import org.springframework.stereotype.Service;

@Service
public class LoanUpdateNullService implements IUpdateLoanService{

    @Override
    public ResponseDto updateLoan(LoanBookManagerDto loanBookManagerDto) {
        return new ResponseFailDto(400, "el campo status no es valido, o esta vacio");
    }
}

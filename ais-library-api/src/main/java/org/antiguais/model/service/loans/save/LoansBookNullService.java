package org.antiguais.model.service.loans.save;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.springframework.stereotype.Service;


@Service
public class LoansBookNullService implements ISaveLoansBookTeacherService{
    @Override
    public ResponseDto saveLoan(LoanBookManagerDto loanBookManagerDto) {
        return new ResponseFailDto(400,"El usuario que pide el prestamo no es soportado, es null, o esta vacio");
    }
}

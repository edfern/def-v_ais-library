package org.antiguais.model.service.loans.delete;

import org.antiguais.model.dao.ILoansStudentRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import static org.antiguais.model.globalmessagess.GlobalMessagess.SUCCESS;


@Service
public class LoanDeleteStudentService implements IDeleteLoanService{
    @Autowired
    ILoansStudentRepository loansStudentRepository;

    @Override
    public ResponseDto deleteLoan(LoanBookManagerDto loanBookManagerDto) {
        try{
            validateParams(loanBookManagerDto);
            loansStudentRepository.deleteById(loanBookManagerDto.getLoanUserDto().getIdLoanUserDto());
            return new ResponseSuccessDto(200,SUCCESS);
        }catch (CustomException e){
            return new ResponseFailDto(e.getStatus(),e.getMessage());
        }catch (EmptyResultDataAccessException ex){
            return new ResponseFailDto(500, "No se puede borrar el prestamo, pueda que no exista un registro con ese ID.");
        }
    }

    private void validateParams(LoanBookManagerDto loanBookManagerDto){
        if (loanBookManagerDto.getLoanUserDto() == null){
            throw new CustomException(400, "se necesitan los campos para la actulizacion");
        }
    }
}

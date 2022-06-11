package org.antiguais.model.service.loans.update;

import org.antiguais.model.dao.ILoansStudentRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.loan.LoanUserDto;
import org.antiguais.model.entity.LoansStudentEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanUpdateStudentService implements IUpdateLoanService{

    @Autowired
    ILoansStudentRepository loansStudentRepository;


    @Override
    public ResponseDto updateLoan(LoanBookManagerDto loanBookManagerDto) {
        try{
            validateParams(loanBookManagerDto);

            if (loansStudentRepository.findById(loanBookManagerDto.getLoanUserDto().getIdLoanUserDto()).isPresent()){
                LoansStudentEntity loansStudentEntity = new LoansStudentEntity();

                loansStudentEntity.setIdLoanStudent(loanBookManagerDto.getLoanUserDto().getIdLoanUserDto());
                loansStudentEntity.setIdStudent(loanBookManagerDto.getLoanUserDto().getIdUser());
                loansStudentEntity.setStatus(loanBookManagerDto.getLoanUserDto().getStatus());
                loansStudentEntity.setDepartureDate(loanBookManagerDto.getLoanUserDto().getDepartureDate());
                loansStudentEntity.setReturnDate(loanBookManagerDto.getLoanUserDto().getReturnDate());
                loansStudentRepository.save(loansStudentEntity);
                return new ResponseSuccessDto(200,"Se actualizo el prestamo correctamente");
            }else{
                return new ResponseFailDto(500,"no se encuentra el prestamo solicitado");
            }

        }catch (CustomException exception){
            return new ResponseFailDto(exception.getStatus(),exception.getMessage());
        }
    }

    private void validateParams(LoanBookManagerDto loanBookManagerDto){
        if (loanBookManagerDto.getLoanUserDto() == null){
            throw new CustomException(400, "se necesitan los campos para la actulizacion");
        }
    }
}

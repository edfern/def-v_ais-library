package org.antiguais.model.service.loans.update;

import org.antiguais.model.dao.ILoansTeacherRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.loan.LoanUserDto;
import org.antiguais.model.entity.LoansStudentEntity;
import org.antiguais.model.entity.LoansTeacherEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class LoanUpdateTeacherService implements IUpdateLoanService{
    @Autowired
    ILoansTeacherRepository loansTeacherRepository;

    @Override
    public ResponseDto updateLoan(LoanBookManagerDto loanBookManagerDto) {
        try{
            validateParams(loanBookManagerDto.getLoanUserDto());

            if (loansTeacherRepository.findById(loanBookManagerDto.getLoanUserDto().getIdLoanUserDto()).isPresent()){
                LoansTeacherEntity loansStudentEntity = new LoansTeacherEntity();

                loansStudentEntity.setIdLoanTeacher(loanBookManagerDto.getLoanUserDto().getIdLoanUserDto());
                loansStudentEntity.setIdTeacher(loanBookManagerDto.getLoanUserDto().getIdUser());
                loansStudentEntity.setStatus(loanBookManagerDto.getLoanUserDto().getStatus());
                loansStudentEntity.setDepartureDate(loanBookManagerDto.getLoanUserDto().getDepartureDate());
                loansStudentEntity.setReturnDate(loanBookManagerDto.getLoanUserDto().getReturnDate());
                loansTeacherRepository.save(loansStudentEntity);
                return new ResponseSuccessDto(200,"Se actualizo el prestamo correctamente");
            }else{
                return new ResponseFailDto(500,"no se encuentra el prestamo solicitado");
            }

        }catch (CustomException exception){
            return new ResponseFailDto(exception.getStatus(),exception.getMessage());
        }
    }

    private void validateParams(LoanUserDto loanBookManagerDto){
        if (loanBookManagerDto.getIdLoanUserDto() == 0){
            throw new CustomException(400, "se necesitan los campos para la actulizacion");
        }
    }
}

package org.antiguais.model.service.loans.save;

import org.antiguais.model.dao.ILoansBooksStudentRespository;
import org.antiguais.model.dao.ILoansStudentRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.loan.LoanBookUserDto;
import org.antiguais.model.entity.LoansBooksStudentEntity;
import org.antiguais.model.entity.LoansStudentEntity;
import org.antiguais.model.entity.SpecimensEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoansBookStudentService implements ISaveLoansBookTeacherService{

    @Autowired
    ILoansStudentRepository loansStudentRepository;
    @Autowired
    ILoansBooksStudentRespository loansBooksStudentRespository;

    @Override
    public ResponseDto saveLoan(LoanBookManagerDto loanBookManagerDto) {
        try {
            //paso 1 insertar en loansTeacherEtity
            LoansStudentEntity loansTeacherEntity = new LoansStudentEntity();
            loansTeacherEntity.setIdStudent(loanBookManagerDto.getLoanUserDto().getIdUser());
            loansTeacherEntity.setDepartureDate(loanBookManagerDto.getLoanUserDto().getDepartureDate());
            loansTeacherEntity.setReturnDate(loanBookManagerDto.getLoanUserDto().getReturnDate());
            loansStudentRepository.save(loansTeacherEntity);


            int id_loans = loansStudentRepository.getLastId();
            System.out.println(id_loans);

            Thread thread = new Thread();
            for (LoanBookUserDto loanBookUserDto : loanBookManagerDto.getLoanBookUserDtos() ) {
                LoansBooksStudentEntity loansBooksStudentEntity = new LoansBooksStudentEntity();
                loansBooksStudentEntity.setCantidad(loanBookUserDto.getCantidad());
                loansBooksStudentEntity.setSpecimensByIdSpecimens(new SpecimensEntity(loanBookUserDto.getIdSpecimens()));
                loansBooksStudentEntity.setLoansStudentByIdLoanStudent(new LoansStudentEntity(id_loans));
                loansBooksStudentRespository.save(loansBooksStudentEntity);
            }

            return new ResponseSuccessDto(200,"El prestamo se agrego correctamente");
        }catch (CustomException customException){
            return new ResponseFailDto(customException.getStatus(),customException.getMessage());
        }
    }
}

package org.antiguais.model.service.loans.save;


import org.antiguais.model.dao.ILoansBooksTeacherRepository;
import org.antiguais.model.dao.ILoansTeacherRepository;
import org.antiguais.model.dao.ISpecimensRepository;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.dto.loan.LoanBookManagerDto;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.loan.LoanBookUserDto;
import org.antiguais.model.entity.LoansBooksTeacherEntity;
import org.antiguais.model.entity.LoansTeacherEntity;
import org.antiguais.model.entity.SpecimensEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoansBookTeacherService implements ISaveLoansBookTeacherService{

    @Autowired
    ILoansBooksTeacherRepository loansBooksTeacherRepository;
    @Autowired
    ILoansTeacherRepository loansTeacherRepository;


    @Override
    public ResponseDto saveLoan(LoanBookManagerDto loanBookManagerDto) {

        try {
            valiteParams(loanBookManagerDto);
            //paso 1 insertar en loansTeacherEtity
            LoansTeacherEntity loansTeacherEntity = new LoansTeacherEntity();
            loansTeacherEntity.setIdTeacher(loanBookManagerDto.getLoanUserDto().getIdUser());
            loansTeacherEntity.setDepartureDate(loanBookManagerDto.getLoanUserDto().getDepartureDate());
            loansTeacherEntity.setReturnDate(loanBookManagerDto.getLoanUserDto().getReturnDate());
            loansTeacherRepository.save(loansTeacherEntity);


            int id_loans = loansTeacherRepository.getLastId();

            for (LoanBookUserDto loanBookUserDto : loanBookManagerDto.getLoanBookUserDtos() ) {
                LoansBooksTeacherEntity loansBooksTeacherEntity = new LoansBooksTeacherEntity();
                loansBooksTeacherEntity.setCatidad(loanBookUserDto.getCantidad());
                loansBooksTeacherEntity.setSpecimensByIdSpecimens(new SpecimensEntity(loanBookUserDto.getIdSpecimens()));
                loansBooksTeacherEntity.setLoansTeacherByIdLoanTeacher(new LoansTeacherEntity(id_loans));
                loansBooksTeacherRepository.save(loansBooksTeacherEntity);
            }

            return new ResponseSuccessDto(200,"El prestamo se agrego correctamente");
        }catch (CustomException customException){
            return new ResponseFailDto(customException.getStatus(),customException.getMessage());
        }
    }


    private void valiteParams(LoanBookManagerDto loanBookManagerDto){
        if(loanBookManagerDto.getLoanBookUserDtos().isEmpty() || loanBookManagerDto.getLoanUserDto() == null){
            throw new CustomException(400,"se necesita la cabezera del registro");
        }
        if(loanBookManagerDto.getLoanBookUserDtos().isEmpty() || loanBookManagerDto.getLoanBookUserDtos() == null){
            throw new CustomException(400,"se necesita la cabezera del registro");
        }
    }
}

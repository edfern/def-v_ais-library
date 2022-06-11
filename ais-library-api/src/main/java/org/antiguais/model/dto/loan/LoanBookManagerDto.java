package org.antiguais.model.dto.loan;

import java.util.List;

public class LoanBookManagerDto {
    private LoanUserDto loanUserDto;
    private List<LoanBookUserDto> loanBookUserDtos;
    private String typeUser;


    public LoanBookManagerDto(LoanUserDto loanUserDto, List<LoanBookUserDto> loanBookUserDtos, String typeUser) {
        this.loanUserDto = loanUserDto;
        this.loanBookUserDtos = loanBookUserDtos;
        this.typeUser = typeUser;
    }

    public LoanUserDto getLoanUserDto() {
        return loanUserDto;
    }

    public void setLoanUserDto(LoanUserDto loanUserDto) {
        this.loanUserDto = loanUserDto;
    }

    public List<LoanBookUserDto> getLoanBookUserDtos() {
        return loanBookUserDtos;
    }

    public void setLoanBookUserDtos(List<LoanBookUserDto> loanBookUserDtos) {
        this.loanBookUserDtos = loanBookUserDtos;
    }

    public String getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }
}

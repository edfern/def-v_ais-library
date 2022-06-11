package org.antiguais.model.dto.loan;

import java.sql.Date;

public class LoanUserDto {
    private int idUser;
    private Date departureDate;
    private Date returnDate;
    private byte status;
    private int idLoanUserDto;

    public int getIdLoanUserDto() {
        return idLoanUserDto;
    }

    public void setIdLoanUserDto(int idLoanUserDto) {
        this.idLoanUserDto = idLoanUserDto;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
    }
}

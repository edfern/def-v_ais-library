package org.antiguais.model.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "loans_teacher", schema = "AntiguaInternational", catalog = "")
public class LoansTeacherEntity {
    private int idLoanTeacher;
    private int idTeacher;
    private Date departureDate;
    private Date returnDate;
    private byte status;

    public LoansTeacherEntity(){

    }

    public LoansTeacherEntity(int idLoanTeacher) {
        this.idLoanTeacher = idLoanTeacher;
    }

    @Id
    @Column(name = "id_loan_teacher")
    public int getIdLoanTeacher() {
        return idLoanTeacher;
    }

    public void setIdLoanTeacher(int idLoanTeacher) {
        this.idLoanTeacher = idLoanTeacher;
    }

    @Basic
    @Column(name = "id_teacher")
    public int getIdTeacher() {
        return idTeacher;
    }

    public void setIdTeacher(int idTeacher) {
        this.idTeacher = idTeacher;
    }

    @Basic
    @Column(name = "departure_date")
    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    @Basic
    @Column(name = "return_date")
    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    @Basic
    @Column(name = "status")
    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoansTeacherEntity that = (LoansTeacherEntity) o;
        return idLoanTeacher == that.idLoanTeacher && idTeacher == that.idTeacher && status == that.status && Objects.equals(departureDate, that.departureDate) && Objects.equals(returnDate, that.returnDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idLoanTeacher, idTeacher, departureDate, returnDate, status);
    }
}

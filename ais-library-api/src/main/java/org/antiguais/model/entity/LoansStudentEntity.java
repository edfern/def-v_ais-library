package org.antiguais.model.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "loans_student", schema = "AntiguaInternational", catalog = "")
public class LoansStudentEntity {
    private int idLoanStudent;
    private int idStudent;
    private Date departureDate;
    private Date returnDate;
    private byte status;

    public LoansStudentEntity(){

    }

    public LoansStudentEntity(int idLoanStudent) {
        this.idLoanStudent = idLoanStudent;
    }

    @Id
    @Column(name = "id_loan_student")
    public int getIdLoanStudent() {
        return idLoanStudent;
    }

    public void setIdLoanStudent(int idLoanStudent) {
        this.idLoanStudent = idLoanStudent;
    }

    @Basic
    @Column(name = "id_student")
    public int getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(int idStudent) {
        this.idStudent = idStudent;
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
        LoansStudentEntity that = (LoansStudentEntity) o;
        return idLoanStudent == that.idLoanStudent && idStudent == that.idStudent && status == that.status && Objects.equals(departureDate, that.departureDate) && Objects.equals(returnDate, that.returnDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idLoanStudent, idStudent, departureDate, returnDate, status);
    }
}

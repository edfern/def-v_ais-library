package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "loans_books_student", schema = "AntiguaInternational", catalog = "")
public class LoansBooksStudentEntity {
    private int id;
    private int cantidad;
    private LoansStudentEntity loansStudentByIdLoanStudent;
    private SpecimensEntity specimensByIdSpecimens;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "cantidad")
    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoansBooksStudentEntity that = (LoansBooksStudentEntity) o;
        return id == that.id && cantidad == that.cantidad;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cantidad);
    }

    @ManyToOne
    @JoinColumn(name = "id_loan_student", referencedColumnName = "id_loan_student", nullable = false)
    public LoansStudentEntity getLoansStudentByIdLoanStudent() {
        return loansStudentByIdLoanStudent;
    }

    public void setLoansStudentByIdLoanStudent(LoansStudentEntity loansStudentByIdLoanStudent) {
        this.loansStudentByIdLoanStudent = loansStudentByIdLoanStudent;
    }

    @ManyToOne
    @JoinColumn(name = "id_specimens", referencedColumnName = "id_specimens", nullable = false)
    public SpecimensEntity getSpecimensByIdSpecimens() {
        return specimensByIdSpecimens;
    }

    public void setSpecimensByIdSpecimens(SpecimensEntity specimensByIdSpecimens) {
        this.specimensByIdSpecimens = specimensByIdSpecimens;
    }
}

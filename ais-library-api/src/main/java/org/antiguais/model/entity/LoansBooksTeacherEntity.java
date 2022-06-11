package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "loans_books_teacher", schema = "AntiguaInternational", catalog = "")
public class LoansBooksTeacherEntity {
    private int idLoansBooksTeacher;
    private int catidad;
    private LoansTeacherEntity loansTeacherByIdLoanTeacher;
    private SpecimensEntity specimensByIdSpecimens;

    @Id
    @Column(name = "id_loans_books_teacher")
    public int getIdLoansBooksTeacher() {
        return idLoansBooksTeacher;
    }

    public void setIdLoansBooksTeacher(int idLoansBooksTeacher) {
        this.idLoansBooksTeacher = idLoansBooksTeacher;
    }

    @Basic
    @Column(name = "catidad")
    public int getCatidad() {
        return catidad;
    }

    public void setCatidad(int catidad) {
        this.catidad = catidad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoansBooksTeacherEntity that = (LoansBooksTeacherEntity) o;
        return idLoansBooksTeacher == that.idLoansBooksTeacher && catidad == that.catidad;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idLoansBooksTeacher, catidad);
    }

    @ManyToOne
    @JoinColumn(name = "id_loan_teacher", referencedColumnName = "id_loan_teacher", nullable = false)
    public LoansTeacherEntity getLoansTeacherByIdLoanTeacher() {
        return loansTeacherByIdLoanTeacher;
    }

    public void setLoansTeacherByIdLoanTeacher(LoansTeacherEntity loansTeacherByIdLoanTeacher) {
        this.loansTeacherByIdLoanTeacher = loansTeacherByIdLoanTeacher;
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

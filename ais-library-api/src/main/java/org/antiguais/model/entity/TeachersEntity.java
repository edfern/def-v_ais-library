package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "teachers", schema = "AntiguaInternational", catalog = "")
public class TeachersEntity {
    private int idTeacher;
    private String name;
    private String surname;
    private String email;

    @Id
    @Column(name = "id_teacher")
    public int getIdTeacher() {
        return idTeacher;
    }

    public void setIdTeacher(int idTeacher) {
        this.idTeacher = idTeacher;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "surname")
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeachersEntity that = (TeachersEntity) o;
        return idTeacher == that.idTeacher && Objects.equals(name, that.name) && Objects.equals(surname, that.surname) && Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacher, name, surname, email);
    }
}

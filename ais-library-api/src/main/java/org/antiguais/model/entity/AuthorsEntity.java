package org.antiguais.model.entity;

import org.antiguais.model.exception.CustomException;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;
import static org.antiguais.model.globalmessagess.GlobalMessagess.*;

@Entity
@Table(name = "authors", schema = "AntiguaInternational", catalog = "")
public class AuthorsEntity {
    private int idAuthor;
    private String name;

    @Id
    @Column(name = "id_author")
    public int getIdAuthor() {
        return idAuthor;
    }

    public void setIdAuthor(int idAuthor) {
        this.idAuthor = idAuthor;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {

        if (name == null || name.equals("")) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "nombre:Autor"));
        } else {
            this.name = name;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AuthorsEntity that = (AuthorsEntity) o;
        return idAuthor == that.idAuthor && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idAuthor, name);
    }


}

package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "editorials", schema = "AntiguaInternational", catalog = "")
public class EditorialsEntity {
    private int idEditorial;
    private String editorial;

    @Id
    @Column(name = "id_editorial")
    public int getIdEditorial() {
        return idEditorial;
    }

    public void setIdEditorial(int idEditorial) {
        this.idEditorial = idEditorial;
    }

    @Basic
    @Column(name = "editorial")
    public String getEditorial() {
        return editorial;
    }

    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EditorialsEntity that = (EditorialsEntity) o;
        return idEditorial == that.idEditorial && Objects.equals(editorial, that.editorial);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idEditorial, editorial);
    }
}

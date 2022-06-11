package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "specimens", schema = "AntiguaInternational", catalog = "")
public class SpecimensEntity {
    private int idSpecimens;
    private int idBook;
    private int stock;

    public SpecimensEntity(){

    }

    public SpecimensEntity(int idSpecimens) {
        this.idSpecimens = idSpecimens;
    }

    @Id
    @Column(name = "id_specimens")
    public int getIdSpecimens() {
        return idSpecimens;
    }

    public void setIdSpecimens(int idSpecimens) {
        this.idSpecimens = idSpecimens;
    }

    @Basic
    @Column(name = "id_book")
    public int getIdBook() {
        return idBook;
    }

    public void setIdBook(int idBook) {
        this.idBook = idBook;
    }

    @Basic
    @Column(name = "stock")
    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SpecimensEntity that = (SpecimensEntity) o;
        return idSpecimens == that.idSpecimens && idBook == that.idBook && stock == that.stock;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idSpecimens, idBook, stock);
    }
}

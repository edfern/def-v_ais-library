package org.antiguais.model.entity;

import org.antiguais.model.exception.CustomException;

import javax.persistence.*;
import java.util.Objects;

import static org.antiguais.model.globalmessagess.GlobalMessagess.NOT_PARAMERS;

@Entity
@Table(name = "categories", schema = "AntiguaInternational", catalog = "")
public class CategoriesEntity {
    private int idCategory;
    private String category;

    @Id
    @Column(name = "id_category")
    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }

    @Basic
    @Column(name = "category")
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        if (category == null || category.equals("")) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "categoría."));
        } else {
            this.category = category;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CategoriesEntity that = (CategoriesEntity) o;
        return idCategory == that.idCategory && Objects.equals(category, that.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCategory, category);
    }
}

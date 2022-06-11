package org.antiguais.model.entity;

import org.antiguais.model.exception.CustomException;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "images", schema = "antiguainternational", catalog = "")
public class ImagesEntity {
    private int id;
    private String name;
    private String path;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 45)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name == null || name.equals("")) {
            throw new CustomException(500, "Se necesita nombre de la imagen");
        } else {
            this.name = name;
        }
    }

    @Basic
    @Column(name = "path", nullable = false, length = 250)
    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ImagesEntity that = (ImagesEntity) o;

        if (id != that.id) return false;

        if (!Objects.equals(name, that.name)) return false;

        if (!Objects.equals(path, that.path)) return false;

        return true;
    }

    @Override
    public int hashCode() {

        int result = id;

        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (path != null ? path.hashCode() : 0);

        return result;
    }

}

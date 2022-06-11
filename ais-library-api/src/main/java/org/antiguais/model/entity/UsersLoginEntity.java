package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "users_login", schema = "AntiguaInternational", catalog = "")
public class UsersLoginEntity {
    private int idUser;
    private String user;
    private String pass;
    private String url;
    private String email;

    @Id
    @Column(name = "id_user")
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    @Basic
    @Column(name = "user")
    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @Basic
    @Column(name = "pass")
    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Basic
    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
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
        UsersLoginEntity that = (UsersLoginEntity) o;
        return idUser == that.idUser && Objects.equals(user, that.user) && Objects.equals(pass, that.pass) && Objects.equals(url, that.url) && Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, user, pass, url, email);
    }
}

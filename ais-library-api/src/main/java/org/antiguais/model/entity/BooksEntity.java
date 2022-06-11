package org.antiguais.model.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "books", schema = "AntiguaInternational", catalog = "")
public class BooksEntity {
    private int idBook;
    private String countryInfo;
    private String languageInfo;
    private String isbn;
    private String isbn2;
    private int idAuthor;
    private String name;
    private byte bookStatus;
    private Integer idCategory;
    private String url;
    private ImagesEntity image;

    @Id
    @Column(name = "id_book")
    public int getIdBook() {
        return idBook;
    }

    public void setIdBook(int idBook) {
        this.idBook = idBook;
    }

    @Basic
    @Column(name = "country_info")
    public String getCountryInfo() {
        return countryInfo;
    }

    public void setCountryInfo(String countryInfo) {
        this.countryInfo = countryInfo;
    }

    @Basic
    @Column(name = "language_info")
    public String getLanguageInfo() {
        return languageInfo;
    }

    public void setLanguageInfo(String languageInfo) {
        this.languageInfo = languageInfo;
    }

    @Basic
    @Column(name = "isbn")
    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    @Basic
    @Column(name = "isbn2")
    public String getIsbn2() {
        return isbn2;
    }

    public void setIsbn2(String isbn2) {
        this.isbn2 = isbn2;
    }

    @Basic
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
        this.name = name;
    }

    @Basic
    @Column(name = "book_status")
    public byte getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(byte bookStatus) {
        this.bookStatus = bookStatus;
    }

    @Basic
    @Column(name = "id_category")
    public Integer getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    @OneToOne
    @JoinColumn( name = "id_image", referencedColumnName = "id", nullable = false)
    public ImagesEntity getIdImage() {
        return image;
    }

    public void setIdImage(ImagesEntity image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BooksEntity that = (BooksEntity) o;
        return idBook == that.idBook && idAuthor == that.idAuthor && bookStatus == that.bookStatus && Objects.equals(countryInfo, that.countryInfo) && Objects.equals(languageInfo, that.languageInfo) && Objects.equals(isbn, that.isbn) && Objects.equals(isbn2, that.isbn2) && Objects.equals(name, that.name) && Objects.equals(idCategory, that.idCategory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBook, countryInfo, languageInfo, isbn, isbn2, idAuthor, name, bookStatus, idCategory);
    }

    @Basic
    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

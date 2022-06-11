package org.antiguais.model.entity;

import org.antiguais.model.exception.CustomException;

import javax.persistence.*;
import java.util.Objects;

import static org.antiguais.model.globalmessagess.GlobalMessagess.NOT_PARAMERS;

@Entity
@Table(name = "books", schema = "AntiguaInternational", catalog = "")
public class AuthorCatetoryEntity {
    private int idBook;
    private String countryInfo;
    private String languageInfo;
    private String isbn;
    private String isbn2;
    private String name;
    private byte bookStatus;
    private String url;
    private AuthorsEntity author;
    private CategoriesEntity category;
    private ImagesEntity image;

    @OneToOne
    @JoinColumn(name = "id_category", referencedColumnName = "id_category", nullable = false)
    public CategoriesEntity getCategory() {
        return category;
    }

    public void setCategory(CategoriesEntity category) {
        this.category = category;
    }

    @OneToOne
    @JoinColumn(name = "id_author", referencedColumnName = "id_author", nullable = false)
    public AuthorsEntity getAuthors() {
        return author;
    }

    public void setAuthors(AuthorsEntity authors) {
        this.author = authors;
    }

    @OneToOne
    @JoinColumn(name = "id_image", referencedColumnName = "id", nullable = false)
    public ImagesEntity getIdImage() {
        return image;
    }

    public void setIdImage(ImagesEntity image) {
        this.image = image;
    }


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
        if (countryInfo == null || countryInfo.equals("")) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "país."));
        } else {
            this.countryInfo = countryInfo;
        }
    }

    @Basic
    @Column(name = "language_info")
    public String getLanguageInfo() {
        return languageInfo;
    }

    public void setLanguageInfo(String languageInfo) {
        if (languageInfo == null || languageInfo.equals("")) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "idioma."));
        } else {
            this.languageInfo = languageInfo;
        }
    }

    @Basic
    @Column(name = "isbn")
    public String getIsbn() {

        if (isbn == null || isbn.isEmpty()) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "isbn"));
        } else {
            return isbn;
        }
    }

    public void setIsbn(String isbn) {
        if (isbn == null || isbn.isEmpty()) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "isbn"));
        } else {
            this.isbn = isbn;
        }
    }

    @Basic
    @Column(name = "isbn2")
    public String getIsbn2() {
        if (isbn2 == null || isbn2.isEmpty()) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "isbn2"));
        } else {
            return isbn2;
        }

    }

    public void setIsbn2(String isbn2) {
        if (isbn2 == null || isbn2.isEmpty()) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "isbn2"));
        } else {
            this.isbn2 = isbn2;
        }
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name == null || name.equals("")) {
            throw new CustomException(500, String.format(NOT_PARAMERS, "Autor."));
        } else {
            this.name = name;
        }
    }

    @Basic
    @Column(name = "book_status")
    public byte getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(byte bookStatus) {
        this.bookStatus = bookStatus;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AuthorCatetoryEntity that = (AuthorCatetoryEntity) o;
        return idBook == that.idBook && author.getIdAuthor() == that.author.getIdAuthor() && bookStatus == that.bookStatus && Objects.equals(countryInfo, that.countryInfo) && Objects.equals(languageInfo, that.languageInfo) && Objects.equals(isbn, that.isbn) && Objects.equals(isbn2, that.isbn2) && Objects.equals(name, that.name) && Objects.equals(category.getIdCategory(), that.category.getIdCategory());
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBook, countryInfo, languageInfo, isbn, isbn2, author.getIdAuthor(), name, bookStatus, category.getIdCategory());
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

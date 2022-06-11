package org.antiguais.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "books", schema = "AntiguaInternational", catalog = "")
public class TestBookEntity {
    private int idBook;
    private String countryInfo;
    private String languageInfo;
    private String isbn;
    private String isbn2;
    private String name;
    private byte bookStatus;
    private Integer idCategory;
    private String url;
    private AuthorsEntity authorsByIdAuthor;

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

    @Basic
    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TestBookEntity that = (TestBookEntity) o;

        if (idBook != that.idBook) return false;
        if (bookStatus != that.bookStatus) return false;
        if (countryInfo != null ? !countryInfo.equals(that.countryInfo) : that.countryInfo != null) return false;
        if (languageInfo != null ? !languageInfo.equals(that.languageInfo) : that.languageInfo != null) return false;
        if (isbn != null ? !isbn.equals(that.isbn) : that.isbn != null) return false;
        if (isbn2 != null ? !isbn2.equals(that.isbn2) : that.isbn2 != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (idCategory != null ? !idCategory.equals(that.idCategory) : that.idCategory != null) return false;
        if (url != null ? !url.equals(that.url) : that.url != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idBook;
        result = 31 * result + (countryInfo != null ? countryInfo.hashCode() : 0);
        result = 31 * result + (languageInfo != null ? languageInfo.hashCode() : 0);
        result = 31 * result + (isbn != null ? isbn.hashCode() : 0);
        result = 31 * result + (isbn2 != null ? isbn2.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (int) bookStatus;
        result = 31 * result + (idCategory != null ? idCategory.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "id_author", referencedColumnName = "id_author", nullable = false)
    public AuthorsEntity getAuthorsByIdAuthor() {
        return authorsByIdAuthor;
    }

    public void setAuthorsByIdAuthor(AuthorsEntity authorsByIdAuthor) {
        this.authorsByIdAuthor = authorsByIdAuthor;
    }
}

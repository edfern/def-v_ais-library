package org.antiguais.model.dto;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.BooksEntity;

import java.util.List;

public class ResponseBookDto extends ResponseDto{
    private int page;
    private int pages;
    private int sizePage;
    private List<AuthorCatetoryEntity> contentPage;

    public ResponseBookDto(int status, String message, int page, int pages, int sizePage, List<AuthorCatetoryEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }
}

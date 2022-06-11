package org.antiguais.model.dto;

import org.antiguais.model.entity.AuthorsEntity;

import java.util.List;

public class ResponseAuthorDto  extends  ResponseDto{
    private int page;
    private int pages;
    private int sizePage;
    private List<AuthorsEntity> contentPage;

    public ResponseAuthorDto(int status, String message, int page, int pages, int sizePage, List<AuthorsEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }
}

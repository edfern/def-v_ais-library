package org.antiguais.model.dto;

import org.antiguais.model.entity.TeachersEntity;

import java.util.List;

public class ResponseTeacherDto extends ResponseDto{
    private int page;
    private int pages;
    private int sizePage;
    private List<TeachersEntity> contentPage;

    public ResponseTeacherDto(int status, String message, int page, int pages, int sizePage, List<TeachersEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }

    public ResponseTeacherDto(int status, String message, int page, int pages, int sizePage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public int getSizePage() {
        return sizePage;
    }

    public void setSizePage(int sizePage) {
        this.sizePage = sizePage;
    }

    public List<TeachersEntity> getContentPage() {
        return contentPage;
    }

    public void setContentPage(List<TeachersEntity> contentPage) {
        this.contentPage = contentPage;
    }
}

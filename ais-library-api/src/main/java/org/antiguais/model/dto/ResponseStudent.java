package org.antiguais.model.dto;

import org.antiguais.model.entity.StudentsEntity;

import java.util.List;

public class ResponseStudent extends ResponseDto{
    //private int typeMessage;

    //private int status;
   //private String message;

    private int page;
    private int pages;
    private int sizePage;
    private List<StudentsEntity> contentPage;

    public ResponseStudent(int status, String message, int page, int pages, int sizePage, List<StudentsEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }

    public ResponseStudent(int status, String message, int page, int pages, int sizePage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
    }



    public int getStatus() {
        return status;
    }

    public int getPage() {
        return page;
    }

    public int getPages() {
        return pages;
    }

    public int getSizePage() {
        return sizePage;
    }

    public List<StudentsEntity> getContentPage() {
        return contentPage;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

package org.antiguais.model.dto;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.SpecimensEntity;

import java.util.List;

public class ResponseSpecimenDto extends ResponseDto{
    private int page;
    private int pages;
    private int sizePage;
    private List<SpecimensEntity> contentPage;

    public ResponseSpecimenDto(int status, String message, int page, int pages, int sizePage, List<SpecimensEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }
}

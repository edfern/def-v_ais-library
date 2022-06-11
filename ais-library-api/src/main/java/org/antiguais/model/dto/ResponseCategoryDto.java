package org.antiguais.model.dto;


import org.antiguais.model.entity.CategoriesEntity;

import java.util.List;

public class ResponseCategoryDto extends ResponseDto{

    private int page;
    private int pages;
    private int sizePage;
    private List<CategoriesEntity> contentPage;

    public ResponseCategoryDto(int status, String message, int page, int pages, int sizePage, List<CategoriesEntity> contentPage){
        this.status = status;
        this.message = message;
        this.page = page;
        this.pages = pages;
        this.sizePage = sizePage;
        this.contentPage = contentPage;
    }
}

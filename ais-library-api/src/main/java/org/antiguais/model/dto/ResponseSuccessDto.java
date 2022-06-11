package org.antiguais.model.dto;

public class ResponseSuccessDto extends ResponseDto{
    private Object image;
    public ResponseSuccessDto(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseSuccessDto(int status, String message, Object image){
        this.status = status;
        this.message = message;
        this.image = image;
    }
}

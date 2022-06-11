package org.antiguais.model.dto;

public class ResponseFailDto extends ResponseDto{
    public ResponseFailDto(int status,String message) {
        this.status = status;
        this.message = message;
    }

}

package org.antiguais.model.dto;

import org.antiguais.model.entity.AuthorCatetoryEntity;
import org.antiguais.model.entity.UsersLoginEntity;

import java.util.List;

public class ResponseLoginDto extends ResponseSuccessDto {
    private UsersLoginEntity usersLoginEntity;
    private int idUser;
    private String email;
    private String user;

    public ResponseLoginDto(int status, String message, UsersLoginEntity usersLoginEntity) {
        super(status, message);
        this.usersLoginEntity = usersLoginEntity;
    }

    public ResponseLoginDto(int idUser, String email, String user, int status, String message){
        super(status, message);
        this.idUser = idUser;
        this.email = email;
        this.user = user;
    }
}

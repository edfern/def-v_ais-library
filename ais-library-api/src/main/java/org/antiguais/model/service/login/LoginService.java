package org.antiguais.model.service.login;

import org.antiguais.model.dao.IUserDao;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseLoginDto;
import org.antiguais.model.entity.UsersLoginEntity;
import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import static org.antiguais.model.globalmessagess.GlobalMessagess.*;


@Service
public class LoginService implements  ILoginService{

    @Autowired
    IUserDao userDao;

    @Override
    public ResponseDto validateUser(HttpServletRequest request) {


        try{
            UsersLoginEntity user;
            String email = request.getParameter("email");
            String password = request.getParameter("password");

            user = userDao.getUser(email, password);

            if (user != null) {
                if (email.equals(user.getEmail()) && password.equals(user.getPass())) {

                    return new ResponseLoginDto(user.getIdUser(), user.getEmail(), user.getUser(), 200,LOGIN_SUCCESS);
                } else {
                    return new ResponseFailDto(500,LOGIN_FAIL);
                }
            } else {
                return new ResponseFailDto(500,LOGIN_FAIL);
            }

        }catch (CustomException e){
            return new ResponseFailDto(500,"Usuario no valido");
        }

    }

    private void validateParams(HttpServletRequest request){
        if (request.getParameter("email") ==null || request.getParameter("email").isEmpty()){
            throw new CustomException(400,"Se necesita el parametro email-");
        }
    }
}

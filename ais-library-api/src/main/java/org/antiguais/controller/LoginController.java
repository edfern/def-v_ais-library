package org.antiguais.controller;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseLoginDto;
import org.antiguais.model.service.login.ILoginService;
import org.antiguais.model.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseDto loginControl(HttpServletRequest request) throws Exception {
        return loginService.validateUser(request);
    }
}

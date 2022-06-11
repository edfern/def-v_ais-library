package org.antiguais.model.service.login;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseLoginDto;
import org.antiguais.model.entity.UserEntity;

import javax.servlet.http.HttpServletRequest;

public interface ILoginService {
    ResponseDto validateUser(HttpServletRequest request);
}

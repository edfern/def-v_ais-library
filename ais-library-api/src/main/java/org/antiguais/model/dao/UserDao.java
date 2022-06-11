package org.antiguais.model.dao;

import org.antiguais.model.dto.UserDto;

public class UserDao{

    public UserDto getUser(String email, String password) {
        UserDto userDto = new UserDto();
        userDto.setUsername("developer@gmail.com");
        userDto.setKey("was5w8adczxsqfffsad5545asdasd");
        userDto.setPassword("1234");
        userDto.setEmail("developer@gmail.com");
        return userDto;
    }
}

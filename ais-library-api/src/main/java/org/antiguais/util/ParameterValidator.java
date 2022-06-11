package org.antiguais.util;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.util.List;

public class ParameterValidator {
    public static void validateIfAlreadyExist(List<String> parameters, Object o){
        Gson gson = new Gson();

        JsonElement json = gson.toJsonTree(o);
    }
}

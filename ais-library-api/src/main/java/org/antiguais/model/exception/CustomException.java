package org.antiguais.model.exception;

public class CustomException extends RuntimeException {
    private int status;
    private String message;

    public CustomException(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}

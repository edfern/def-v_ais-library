package org.antiguais.model.dto;

import org.antiguais.model.entity.SpecimensEntity;

public class ResponseSpecimenStokDto extends ResponseSuccessDto {
    SpecimensEntity specimensEntity;

    public ResponseSpecimenStokDto(int status, String message, SpecimensEntity specimensEntity) {
        super(status, message);
        this.specimensEntity = specimensEntity;
    }

    public SpecimensEntity getSpecimensEntity() {
        return specimensEntity;
    }

    public void setSpecimensEntity(SpecimensEntity specimensEntity) {
        this.specimensEntity = specimensEntity;
    }
}

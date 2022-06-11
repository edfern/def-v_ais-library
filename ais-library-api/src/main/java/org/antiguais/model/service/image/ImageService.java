package org.antiguais.model.service.image;

import org.antiguais.model.dao.IImagesRepository;
import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.antiguais.model.dto.ResponseSuccessDto;
import org.antiguais.model.entity.ImagesEntity;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.files.UploadFileImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import static org.antiguais.model.globalmessagess.GlobalMessagess.*;

import java.io.IOException;

@Service
public class ImageService {

    @Autowired
    private IImagesRepository repository;

    @Autowired
    UploadFileImage uploadFileImage;

    public ResponseDto create(MultipartFile image) {
        try {
            String path = uploadFileImage.saveFile(image);

            ImagesEntity entity = new ImagesEntity();
            entity.setName(image.getOriginalFilename());
            entity.setPath(path);

            ImagesEntity imageRepository = this.repository.save(entity);

            return new ResponseSuccessDto(HttpStatus.OK.value(), String.format(CUSTOM_SUCCESS, "save."), imageRepository);

        } catch (CustomException ex) {
            return new ResponseFailDto(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
        } catch (IOException ex) {
            return new ResponseFailDto(HttpStatus.BAD_REQUEST.value(), BAD_UPLOAD_DIR_IMAGE);
        }
    }

    public ResponseDto updateById(int id, MultipartFile image) {

        try {

            String path = uploadFileImage.saveFile(image);

            ImagesEntity entity = new ImagesEntity();
            entity.setId(id);
            entity.setName(image.getOriginalFilename());
            entity.setPath(path);
            ImagesEntity imageRepository = this.repository.save(entity);

            return new ResponseSuccessDto(HttpStatus.OK.value(), String.format(CUSTOM_SUCCESS, "update."), imageRepository);

        } catch (CustomException ex) {
            return new ResponseFailDto(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
        } catch (IOException ex) {
            return new ResponseFailDto(HttpStatus.BAD_REQUEST.value(), BAD_UPLOAD_DIR_IMAGE);
        }
    }

}

package org.antiguais.controller;


import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.exception.CustomException;
import org.antiguais.model.service.image.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequestMapping(value = "/image")
@RestController
public class ImageController {

    @Autowired
    ImageService service;

    @CrossOrigin
    @RequestMapping(value = "save", method = RequestMethod.POST)
    @ExceptionHandler( value = CustomException.class)
    public ResponseDto saveImage(@RequestParam( "image") MultipartFile image) {
        return service.create(image);
    }

    @CrossOrigin
    @RequestMapping(value = "update/{id}", method = RequestMethod.PUT)
    public ResponseDto updateImage(@RequestParam( "image") MultipartFile image, @PathVariable("id") int id) throws IOException {
        return service.updateById(id, image);

    }
}

package org.antiguais.model.service.files;

import org.antiguais.model.exception.CustomException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.Objects;

@Component
public class UploadFileImage {

    @Value("${ais-library.dir-url}")
    private String path;

    @Value(("${spring.profiles.active}"))
    private String profile;

    public String saveFile(MultipartFile multipartFile) throws IOException {
        if(multipartFile != null){
            String filename = StringUtils.cleanPath(Objects.requireNonNull(multipartFile.getOriginalFilename()));

            String arr[] = filename.split("[.]");

            if((!arr[arr.length - 1].equals("png") && !arr[arr.length - 1].equals("jpg") && !arr[arr.length - 1].equals("jpeg") )) throw new CustomException(400, "El tipo de imagen no es soportado. Por favor intentelo de nuevo. ");

            String pathFile = this.path;
            Path uploadPath = Paths.get(pathFile);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }


            try (InputStream inputStream = multipartFile.getInputStream()) {
                Path filePath = uploadPath.resolve(filename);

                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);

                if(profile.equals("production")) Files.setPosixFilePermissions(filePath, PosixFilePermissions.fromString("rwxrwxrwx"));

                return filePath.toString();
            } catch (IOException ioe) {
                throw new IOException("Could not save image file: " + filename, ioe);
            }
        }else{
            return "";
        }
    }



}
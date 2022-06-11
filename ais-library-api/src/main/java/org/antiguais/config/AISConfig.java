package org.antiguais.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AISConfig implements WebMvcConfigurer {


    @Value("${cors-url}")
    private String url;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins(url).allowedMethods("GET", "POST","DELETE", "PUT").allowedHeaders("*").allowCredentials(false).maxAge(3600);
    }
}

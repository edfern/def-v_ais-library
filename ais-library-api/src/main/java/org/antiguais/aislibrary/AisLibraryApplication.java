package org.antiguais.aislibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
@ComponentScan(basePackages = {"org.antiguais.controller", "org.antiguais.model", "org.antiguais.config"})
@EntityScan("org.antiguais.model")
@EnableJpaRepositories( "org.antiguais.model.dao")
public class AisLibraryApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(AisLibraryApplication.class, args);
    }
}

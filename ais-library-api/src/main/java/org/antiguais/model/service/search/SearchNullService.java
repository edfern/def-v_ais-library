package org.antiguais.model.service.search;

import org.antiguais.model.dto.ResponseDto;
import org.antiguais.model.dto.ResponseFailDto;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class SearchNullService implements ISearchService{
    @Override
    public ResponseDto searchService(HttpServletRequest request) {
        return new ResponseFailDto(500,"The filter paramter is not soported or is null or is empty");
    }
}

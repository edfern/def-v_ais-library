package org.antiguais.model.service.search;

import org.antiguais.model.dto.ResponseDto;
import javax.servlet.http.HttpServletRequest;

public interface ISearchService {
    public ResponseDto searchService(HttpServletRequest request);
}

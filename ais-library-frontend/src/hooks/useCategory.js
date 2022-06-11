import { useCallback, useState } from 'react';
import {
  ApiListCategoria,
  ApiSearchCategoria,
} from '../services/categoriaService';

const useCategory = () => {
  const [stateSearch, setStateSearch] = useState({
    loading: false,
    message: '',
    success: false,
    error: false,
    data: null,
  });

  const listCategory = useCallback(() => {
    ApiListCategoria()
      .then((resp) => {})
      .catch((error) => {});
  }, []);

  const searchCategory = useCallback(({ query }) => {
    setStateSearch({
      loading: true,
    });
    ApiSearchCategoria({ query })
      .then((resp) => {
        const { contentPage, status, message } = resp;
        setStateSearch({
          loading: false,
        });
        if (status === 200) {
          setStateSearch({
            message: message,
            success: true,
            data: contentPage,
          });
        } else if (status === 500) {
          setStateSearch({
            message: message,
            success: true,
            data: [
              {
                category: message,
              },
            ],
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setStateSearch({
          loading: false,
          message: 'No pudimos establecer conexión con el servidor.',
          success: false,
          error: true,
        });
      });
  }, []);

  return {
    listCategory,
    searchCategory,
    setStateSearch,
    stateSearch,
  };
};

export default useCategory;

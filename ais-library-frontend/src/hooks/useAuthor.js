import { useCallback, useState } from 'react';

import { ApiSearchAuthor } from '../services/authorService';
const useAuthor = () => {
  const [stateAuthor, setStateAuthor] = useState({
    loading: false,
    message: '',
    error: false,
    success: false,
    data: null,
  });

  const searchAuthor = useCallback(
    ({ query }) => {
      setStateAuthor({ loading: true, error: false });
      ApiSearchAuthor({ query })
        .then((resp) => {
          const { contentPage, message, status } = resp;

          if (status === 200) {
            setStateAuthor({
              loading: false,
              message: message,
              error: false,
              success: true,
              data: contentPage,
            });
          } else if (status === 500) {
            setStateAuthor({
              loading: false,
              data: [{ name: message }],
              error: false,
              success: true,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          setStateAuthor({
            loading: false,
            message: 'No pudimos establecer conexión con el servidor.',
            error: true,
            success: true,
          });
        });
    },
    [setStateAuthor]
  );

  return {
    searchAuthor,
    stateAuthor,
  };
};

export default useAuthor;

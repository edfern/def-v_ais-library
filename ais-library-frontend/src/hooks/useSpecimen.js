import { useState, useCallback } from 'react';
import {
  ApiSpecimensDelete,
  ApiSpecimensSave,
  ApiSpecimensUpdate,
} from '../services/specimensService';

const useSpecimen = () => {
  const [stateSpecimen, setSpecimen] = useState({
    loadingSave: false,
    loadingUpdate: false,
    loadingDelete: false,
    success: false,
    message: '',
    error: false,
  });

  const clean = () => {
    setSpecimen({
      loadingSave: false,
      loadingUpdate: false,
      loadingDelete: false,
      success: false,
      message: '',
      error: false,
    });
  };

  const save = useCallback(({ data }) => {
    setSpecimen({
      loadingSave: true,
    });
    ApiSpecimensSave({ data: data })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setSpecimen({
            loadingSave: false,
            success: true,
            message: message,
            error: false,
          });
        }
        if (status === 400) {
          setSpecimen({
            loadingSave: false,
            success: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setSpecimen({
          loadingSave: false,
          success: false,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
          error: true,
        });
      });
  }, []);

  const update = useCallback(({ data }) => {
    setSpecimen({
      loadingUpdate: true,
    });
    ApiSpecimensUpdate({ data: data })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setSpecimen({
            loadingUpdate: false,
            success: true,
            message: message,
            error: false,
          });
        } else if (status === 400) {
          setSpecimen({
            loadingUpdate: false,
            success: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setSpecimen({
          loadingUpdate: false,
          success: false,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
          error: true,
        });
      });
  }, []);

  const delet = useCallback(({ id }) => {
    setSpecimen({
      loadingDelete: true,
    });
    ApiSpecimensDelete({ id: id })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setSpecimen({
            loadingDelete: false,
            success: true,
            message: message,
            error: false,
          });
        } else if (status === 400) {
          setSpecimen({
            loadingDelete: false,
            success: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setSpecimen({
          loadingDelete: false,
          success: false,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
          error: true,
        });
      });
  }, []);

  return {
    save,
    stateSpecimen,
    delet,
    update,
    clean,
  };
};

export default useSpecimen;

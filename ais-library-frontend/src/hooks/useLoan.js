import { useCallback, useState } from 'react';
import { ApiLoanSave, ApiSpecimensById } from '../services/loansService';

const useLoans = () => {
  const [stateLoans, setStateLoans] = useState({
    specimensEntity: null,
    loading: false,
    loadingSave: false,
    loadingUpdate: false,
    loadingDelete: false,
    message: '',
    success: false,
    error: false,
  });

  const search = useCallback(({ id }) => {
    setStateLoans({
      loading: true,
    });
    ApiSpecimensById({ id })
      .then((resp) => {
        const { message, status, specimensEntity } = resp;
        setStateLoans({
          loading: false,
        });
        if (status === 200) {
          setStateLoans({
            specimensEntity: specimensEntity,
            loading: false,
            message: message,
            error: false,
            success: true,
          });
        } else if (status === 500) {
          setStateLoans({
            loading: false,
            message: message,
            error: false,
            success: true,
          });
        } else {
          setStateLoans({
            loading: false,
            message: message,
            error: true,
            success: false,
          });
        }
      })
      .catch((error) => {
        setStateLoans({
          loading: false,
          message: 'Hubo un problema con el servidor, intentelo de nuevo.',
          error: true,
          success: false,
        });
      });
  }, []);

  const save = useCallback(({ data }) => {
    setStateLoans({
      loadingSave: true,
      loadingUpdate: false,
      loadingDelete: false,
    });
    ApiLoanSave({ data })
      .then((resp) => {
        const { message, status } = resp;
        if (status === 200) {
          setStateLoans({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            message: message,
            error: false,
            success: true,
          });
        } else if (status === 400) {
          setStateLoans({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            message: message,
            error: true,
            success: false,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setStateLoans({
          loadingSave: false,
          loadingUpdate: false,
          loadingDelete: false,
          message: 'Hubo un problema con el servidor, intentelo de nuevo.',
          error: true,
        });
      });
  }, []);

  return {
    search,
    save,
    stateLoans,
  };
};

export default useLoans;

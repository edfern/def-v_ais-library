import { useCallback, useState } from 'react';
import {
  ApiTeacherDelete,
  ApiTeacherSave,
  ApiTeacherUpdate,
} from '../services/teachersService';

const UseTeacher = () => {
  const [state, setState] = useState({
    loadingSave: false,
    loadingUpdate: false,
    loadingDelete: false,
    success: false,
    message: '',
    status: 0,
    error: false,
  });

  const save = useCallback(
    ({ dataForm }) => {
      setState({
        loadingSave: true,
        loadingUpdate: false,
        loadingDelete: false,
      });

      ApiTeacherSave({ dataForm })
        .then((resp) => {
          const { status, message } = resp;
          if (status === 200) {
            setState({
              loadingSave: false,
              loadingUpdate: false,
              loadingDelete: false,
              status: status,
              success: true,
              message: message,
              error: false,
            });
          } else {
            setState({
              loadingSave: false,
              loadingUpdate: false,
              loadingDelete: false,
              status: status,
              success: false,
              message: message,
              error: true,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          setState({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            success: false,
            status: 500,
            message: 'Hay problemas con el servidor, inténtelo de nuevo.',
            error: true,
          });
        });
    },
    [setState]
  );

  const update = useCallback(
    ({ dataForm }) => {
      setState({
        loadingSave: false,
        loadingUpdate: true,
        loadingDelete: false,
      });
      ApiTeacherUpdate({ dataForm })
        .then((resp) => {
          const { status, message } = resp;
          if (status === 200) {
            setState({
              loadingSave: false,
              loadingUpdate: false,
              loadingDelete: false,
              success: true,
              message: message,
              error: false,
            });
          } else {
            setState({
              loadingSave: false,
              loadingUpdate: false,
              loadingDelete: false,
              status: status,
              success: false,
              message: message,
              error: true,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          setState({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            success: false,
            status: 500,
            message: 'Hay problemas con el servidor, inténtelo de nuevo.',
            error: true,
          });
        });
    },
    [setState]
  );

  const delet = useCallback(({ id }) => {
    setState({
      loadingSave: false,
      loadingUpdate: false,
      loadingDelete: true,
    });
    ApiTeacherDelete({ id })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setState({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            status: status,
            success: true,
            message: message,
            error: false,
          });
        } else {
          setState({
            loadingSave: false,
            loadingUpdate: false,
            loadingDelete: false,
            status: status,
            success: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setState({
          loadingSave: false,
          loadingUpdate: false,
          loadingDelete: false,
          success: false,
          status: 500,
          message: 'Hay problemas con el servidor, inténtelo de nuevo.',
          error: true,
        });
      });
  }, []);

  return {
    save,
    update,
    delet,
    state,
  };
};

export default UseTeacher;

import { useCallback, useState } from 'react';
import {
  ApiStudentDelete,
  ApiStudentSave,
  ApiStudentUpdate,
} from '../services/studentsService';

const INITIAL_STATE = {
  message: '',
  loading: false,
  error: false,
  success: false,
  loadingUpdate: false,
  loadingDelete: false,
};

const UseStudent = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const save = useCallback(({ dataForm }) => {
    setState({ loading: true });
    ApiStudentSave({ dataForm })
      .then((resp) => {
        const { status, message } = resp;

        if (status === 200) {
          setState({ message: message, loading: false, success: true });
        } else {
          setState({ message: message, loading: false, error: true });
        }
      })
      .catch(() => {
        setState({
          message: 'Hay problemas con el servidor, inténtelo de nuevo.',
          loading: false,
          error: true,
        });
      });
  }, []);

  const update = useCallback(
    ({ dataForm }) => {
      setState({ loadingUpdate: true });
      ApiStudentUpdate({ dataForm })
        .then((resp) => {
          const { status, message } = resp;
          if (status === 200) {
            setState({
              ...state,
              message: message,
              loadingUpdate: false,
              success: true,
            });
          } else {
            setState({
              ...state,
              message: message,
              loadingUpdate: false,
              error: true,
            });
          }
        })
        .catch(() => {
          setState({
            ...state,
            loadingUpdate: false,
            error: true,
            success: false,
            message: 'Hay problemas con el servidor, inténtelo de nuevo.',
          });
        });
    },
    [state]
  );

  const delet = useCallback(
    ({ idForm }) => {
      setState({ loadingDelete: true });
      ApiStudentDelete({ idForm })
        .then((resp) => {
          const { status, message } = resp;
          if (status === 200) {
            setState({
              ...state,
              message: message,
              loadingDelete: false,
              success: true,
            });
          } else {
            setState({
              ...state,
              message: message,
              loadingDelete: false,
              error: true,
            });
          }
        })
        .catch(() => {
          setState({
            ...state,
            loadingDelete: false,
            error: true,
            success: false,
            message: 'Hay problemas con el servidor, inténtelo de nuevo.',
          });
        });
    },
    [state]
  );

  return {
    save,
    update,
    delet,
    state,
  };
};

export default UseStudent;

import { useCallback, useContext, useState } from 'react';

import Context from '../context/userContext';
import { RestApiLogin } from '../services/loginService';
import { v4 as uuidv4 } from 'uuid';

const UseUser = () => {
  const { key, setKey } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  const [stateResp, setResp] = useState({ message: '', status: '' });

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      RestApiLogin({ email, password })
        .then((resp) => {
          setState({ loading: false, error: false });
          const { status } = resp;
          if (status === 200) {
            const key = resp.email ? uuidv4() : undefined;
            setResp(resp);
            localStorage.setItem('key', key);
            setKey(key);
          } else {
            localStorage.removeItem('key');
            setState({ loading: false, error: true });
            setResp(resp);
          }
        })
        .catch(() => {
          localStorage.removeItem('key');
          setState({ loading: false, error: true });
          setResp({
            message:
              'Problema con el servidor, vuelve a intentarlo en unos minutos...',
            status: '3',
          });
        });
    },
    [setKey]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('key');
    setKey(null);
    window.location = '/';
    console.log('Bye');
  }, [setKey]);

  return {
    isLogged: Boolean(key),
    login,
    logout,
    isLoadingLogin: state.loading,
    hasLoadingError: state.error,
    message: stateResp.message,
    typeMessage: stateResp.status.toString(),
  };
};
export default UseUser;

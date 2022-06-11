import { useCallback, useContext, useState } from 'react';

import Context from '../context/useContextSearch';
import { RestApiSearch } from '../services/searchService';

const UseSearch = () => {
  const { dataSearch, setDataSearch } = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false,
    status: 0,
  });
  const [stateData, setStateData] = useState({
    message: '',
    typeMessage: '',
    success: false,
  });

  const clean = () => {
    setDataSearch([]);
  };

  const search = useCallback(
    ({ type, query }) => {
      setState({ loading: true, error: false, success: false });

      RestApiSearch({ type, query })
        .then((res) => {
          const { contentPage, message, status } = res;
          setState({ loading: false, error: false, status: status });
          if (status === 200) {
            setStateData({
              success: true,
            });
            setDataSearch(contentPage);
          } else if (status === 205) {
            setStateData({
              success: true,
            });
            setDataSearch([{ name: message }]);
          } else {
            setState({ loading: false, error: true });
            setStateData({ message: message, typeMessage: '2', success: true });
          }
        })
        .catch(() => {
          setState({ loading: false, error: true });
          setStateData({
            message: 'Hubo un problema con el servidor, intentelo de nuevo.',
            typeMessage: '3',
          });
        });
    },
    [setDataSearch]
  );
  return {
    search,
    success: stateData.success,
    dataSearch: dataSearch,
    statusResp: state.status,
    loading: state.loading,
    typeMessage: stateData.typeMessage,
    statusError: state.error,
    messageError: stateData.message,
    clean,
  };
};

export default UseSearch;

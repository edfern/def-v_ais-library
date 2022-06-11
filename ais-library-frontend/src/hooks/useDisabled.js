import { useCallback, useState } from 'react';

const UseDisabled = () => {
  const [stateResultSearch, setStateResultSearch] = useState(false);

  const openResult = useCallback(() => {
    setStateResultSearch(true);
  }, []);
  const closeResult = useCallback(() => {
    setStateResultSearch(false);
  }, []);

  return {
    openResult,
    closeResult,
    stateResult: stateResultSearch,
  };
};

export default UseDisabled;

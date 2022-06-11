import React, { useState } from 'react';

const Context = React.createContext({});

export const UseContextSearchProvider = ({ children }) => {
  const [dataSearch, setDataSearch] = useState([]);
  const cleanData = () => {
    setDataSearch([]);
  };
  return (
    <Context.Provider value={{ dataSearch, setDataSearch, cleanData }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

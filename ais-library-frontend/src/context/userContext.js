import React, { useState } from 'react';

const Context = React.createContext({})

export const UserContextProvider = ({ children }) => {
    const [key, setKey] = useState(()=> localStorage.getItem('key'))
    
    return (
        <Context.Provider value={{ key, setKey }}>
            { children }
        </Context.Provider>
    )
}

export default Context;

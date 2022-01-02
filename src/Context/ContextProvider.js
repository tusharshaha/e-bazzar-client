import React, { createContext } from 'react';
import useLocalStorage from '../LocalStorage/localStorage'
export const Context = createContext();

const ContextProvider = ({ children }) => {
    const cart = useLocalStorage();
    return (
        <Context.Provider value={cart}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
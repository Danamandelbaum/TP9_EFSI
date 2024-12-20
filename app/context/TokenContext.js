"use client";
import React, { createContext, useState, useEffect } from "react";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const saveToken = (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token'); 
    }
    setToken(newToken);
  };
  
  return (
    <TokenContext.Provider
      value={{
        token,
        saveToken,
        isLoggedIn: !!token, 
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;

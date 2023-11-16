import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCurrentUserDetails, refreshToken } from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const refreshResponse = await refreshToken();
      if (refreshResponse) {
        const userDetails = await fetchCurrentUserDetails();
        setUser(userDetails);
      }
    };
    verifyUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
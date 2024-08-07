import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'user' or 'company'
  const navigate = useNavigate();

  const login = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
    // Redirect based on user type
    if (type === 'user') {
      navigate('/user-dashboard');
    } else if (type === 'company') {
      navigate('/company-dashboard');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

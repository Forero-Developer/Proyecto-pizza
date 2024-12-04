import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Guarda directamente los datos del usuario

  const login = (userData) => {
    setUser(userData); // Guarda el usuario directamente en el estado
  };

  const logout = () => {
    setUser(null); // Limpia el estado al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

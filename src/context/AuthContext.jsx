import React, { createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = () => {
    setToken(token);

    setIsAuth(true);
  };

  const logout = () => {
    setToken("");
    setIsAuth(false);
  };
  console.log(token);

  return <AuthContext.Provider value={{ isAuth, token, login, logout }}>{children}</AuthContext.Provider>;
};

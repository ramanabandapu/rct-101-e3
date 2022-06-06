import React,  { useContext }  from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'
const RequiredAuth = ({ children }) => {
  const {isAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  if(isAuth){
    navigate("/")
  }
  else navigate("/login")
  return children;
};

export default RequiredAuth;

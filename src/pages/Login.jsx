import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
import "./Login.css";
const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);

  const [userDet, setUserDet] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDet({
      ...userDet,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", userDet)
      .then((res) => {
        login(res.data.token);
        console.log("token" ,res.data.token)
        navigate('/')
        alert("Login successful");
      }).catch((err) => {alert(err.message)});
      
  };
  console.log(userDet);
  return (
    <div>
       <form className="login" onSubmit={handleSubmit}>
      <input data-cy="login-email" 
       name="email"
       type="email"
       placeholder="Enter Email"
       value={userDet.email}
       onChange={handleChange}/>
      <input data-cy="login-password" 
        name="password"
        type="password"
        placeholder="Enter Password"
        value={userDet.password}
        onChange={handleChange}/>
      <button data-cy="login-submit" type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;

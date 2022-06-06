import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// use react-router Link or NavLink
// const Link = <a />;
import { AuthContext } from "../../context/AuthContext";
import {useContext} from 'react';

const Navbar = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link"> logo</Link>
      <span data-cy="navbar-cart-items-count">Cart : {0}</span>
      <button data-cy="navbar-login-logout-button">
        {isAuth?"Logout" : "Login"}
        </button>
    </div>
  );
};

export default Navbar;

import React from "react";
import vector from "../assets/images/vector.png"
import Search from "./Search";
import { Link } from "react-router-dom";
import './Header.css';
const Header=() => {
  return(
    <header>
    <div className="header-container">
      <div className="logo-container center">
        <img src={vector} />
        <span className="alura">Alura</span>
        <span className="geek">Geek</span>
      </div>
      <Search />
      <div className="button-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
    </div>
  </header>
)};

export default Header;

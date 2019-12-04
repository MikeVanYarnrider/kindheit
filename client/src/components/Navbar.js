import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../images";
import "../assets/stylesheet/components/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container-flex nav-container">
        <img src={logo} className="nav-logo" alt="Logo Kindheit" />
        <nav class="navbar">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

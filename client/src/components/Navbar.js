import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../images";
import "../assets/stylesheet/components/navbar.scss";
import { logout } from "./services/auth";

const Navbar = props => {
  const handleLogout = () => {
    logout();
    props.clearUser(null);
  };

  return (
    <div className="nav">
      <div className="container-flex nav-container">
        <img src={logo} className="nav-logo" alt="Logo Kindheit" />
        <nav className="navbar">
          {props.user ? (
            <>
              <p
                style={{ margin: 0, padding: 0 }}
                className="navbar-link"
                to="/"
              >
                Hi {props.user.username}
              </p>
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/logout" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <React.Fragment>
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/signup">
                Signup
              </Link>
              <Link className="navbar-link" to="/parentlogin">
                Parentlogin
              </Link>
              <Link className="navbar-link" to="/login">
            Child Login
          </Link>
            </React.Fragment>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

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
              <p style={{ margin: 0, padding: 0 }}>Hi {props.user.username}</p>
              {props.location.pathname !== "/" && (
                <Link className="navbar-link" to="/">
                  Home
                </Link>
              )}

              {/* IN CASE USER IS PARENT: */}
              {props.user.type === "parent" && (
                <Link className="navbar-link" to="/childsignup">
                  Child Signup
                </Link>
              )}
              <Link className="navbar-link" to="/logout" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <React.Fragment>
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/parentlogin">
                Parentlogin
              </Link>
              <Link className="navbar-link" to="/childlogin">
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

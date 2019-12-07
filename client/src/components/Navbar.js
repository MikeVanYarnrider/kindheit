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

  const pathName = props.location.pathname;

  return (
    <div className="nav">
      <div className="container-flex nav-container">
        <img src={logo} className="nav-logo" alt="Logo Kindheit" />
        <nav className="navbar">
          {/* IS USER DETECTED? */}
          {props.user ? (
            <>
              <p style={{ margin: 0, padding: 0 }}>Hi {props.user.username}</p>
              <Link className="navbar-link" to="/">
                Home
              </Link>

              {/* IN CASE USER IS PARENT: */}
              {props.user.type === "parent" && (
                <Link className="navbar-link" to="/childsignup">
                  Child Signup
                </Link>
              )}
              {/*LOGOUT FOR BOTH USER-TYPES: */}
              <Link className="navbar-link" to="/logout" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <React.Fragment>
              {/* NO USER DETECTED: */}
              {/* INDEX SELECTED: */}
              {pathName === "/" ? (
                <>
                  <Link className="navbar-link" to="/signup">
                    Signup
                  </Link>
                  <Link className="navbar-link" to="/parentlogin">
                    Parentlogin
                  </Link>
                </>
              ) : /* PARENT LOGIN SELECTED: */

              pathName === "/parentlogin" ? (
                <>
                  <Link className="navbar-link" to="/childlogin">
                    Child Login
                  </Link>
                  <Link className="navbar-link" to="/signup">
                    Signup
                  </Link>
                </>
              ) : /* CHILD LOGIN SELECTED: */

              pathName === "/childlogin" ? (
                <>
                  <Link className="navbar-link" to="/parentlogin">
                    Parentlogin
                  </Link>
                  <Link className="navbar-link" to="/signup">
                    Signup
                  </Link>
                </>
              ) : (
                /* SIGNUP SELECTED: */
                pathName === "/signup" && (
                  <>
                    <Link className="navbar-link" to="/childlogin">
                      Child Login
                    </Link>
                    <Link className="navbar-link" to="/parentlogin">
                      Parentlogin
                    </Link>
                  </>
                )
              )}
            </React.Fragment>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

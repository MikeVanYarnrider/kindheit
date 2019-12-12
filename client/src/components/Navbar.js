import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
  loginChildrenNotActive,
  loginParentsNotActive,
  logoutIcon,
  home,
  signupChildren
} from "../images";
import "../assets/stylesheet/components/navbar.scss";
import { logout } from "./services/auth";

const Navbar = props => {
  let parentIcon = loginParentsNotActive;
  let childrenIcon = loginChildrenNotActive;

  let changeIconsStartScreen = () => {
    console.log("");
  };

  const handleLogout = () => {
    logout(props);
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
              <h2
                style={{
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#33b6c6", marginRight: "10px"
                }}
              >
                Hi {props.user.username}
              </h2>
              {props.location.pathname !== "/" && (
                <Link className="navbar-link" to="/">
                  <img src={home} style={{ height: "50px" }} alt="" />
                </Link>
              )}
              <Link className="navbar-link" to="/logout" onClick={handleLogout}>
                <img src={logoutIcon} style={{ height: "50px" }} alt="" />
              </Link>
            </>
          ) : (
            <>
              {/* NO USER DETECTED: */}
              {/* INDEX SELECTED: */}
              {pathName === "/" ? (
                <>
                  {/*          <Link className="navbar-link" to="/signup">
                    Signup
                  </Link> */}
                  <Link className="navbar-link parentLogin" to="/parentlogin">
                    <img
                      src={parentIcon}
                      style={{ height: "50px" }}
                      onClickCapture={console.log("hex")}
                      alt=""
                    />
                  </Link>
                </>
              ) : /* PARENT LOGIN SELECTED: */

              pathName === "/parentlogin" ? (
                <>
                  <Link className="navbar-link childrenLogin" to="/childlogin">
                    <img src={childrenIcon} style={{ height: "50px" }} alt="" />
                  </Link>
                  {/*          <Link className="navbar-link" to="/signup">
                    Signup
                  </Link> */}
                </>
              ) : /* PARENT LOGIN SELECTED: */

              pathName === "/signup" ? (
                <>
                  <Link className="navbar-link childrenLogin" to="/childlogin">
                    <img src={childrenIcon} style={{ height: "50px" }} alt="" />
                  </Link>
                  {/*          <Link className="navbar-link" to="/signup">
      Signup
    </Link> */}
                </>
              ) : (
                /* CHILD LOGIN SELECTED: */ <>
                  <Link
                    className="navbar-link parentLogin"
                    onClickCapture={changeIconsStartScreen()}
                    to="/parentlogin"
                  >
                    <img src={parentIcon} style={{ height: "50px" }} alt="" />
                  </Link>
                  {/*       <Link className="navbar-link" to="/signup">
                    Signup
                  </Link> */}
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

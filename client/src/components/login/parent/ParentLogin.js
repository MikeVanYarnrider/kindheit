import React from "react";
import { CSSTransition } from "react-transition-group";
import LoginForm from "./LoginForm";


const ParentLogin = props => {
  return (
    <CSSTransition in appear classNames="app-fade" timeout={800}>
    <div style={{paddingLeft: "40px"}}> <LoginForm {...props} /></div>
     
    </CSSTransition>
  );
};

export default ParentLogin;

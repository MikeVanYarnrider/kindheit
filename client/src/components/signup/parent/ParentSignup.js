import React from "react";
import { CSSTransition } from "react-transition-group";
import SignupForm from "./SignupForm";

const ParentSignup = props => {
  return (
    <CSSTransition in appear classNames="app-fade" timeout={800}>
       <div style={{paddingLeft: "40px"}}> <SignupForm {...props} /></div>
    </CSSTransition>
  );
};

export default ParentSignup;

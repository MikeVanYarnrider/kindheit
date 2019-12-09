import React from "react";
import { CSSTransition } from "react-transition-group";
import SignupForm from "./SignupForm";

const ParentSignup = props => {
  return (
    <CSSTransition in appear classNames="app-fade" timeout={800}>
      <SignupForm {...props} />
    </CSSTransition>
  );
};

export default ParentSignup;

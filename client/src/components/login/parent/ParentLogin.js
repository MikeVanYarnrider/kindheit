import React from "react";
import Welcome from "../../Welcome";
import LoginForm from "./LoginForm";

const ParentLogin = props => {
  return (
    <Welcome>
      <LoginForm {...props} />
    </Welcome>
  );
};

export default ParentLogin;

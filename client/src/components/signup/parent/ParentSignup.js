import React from "react";
import Welcome from "../../Welcome";
import SignupForm from "./SignupForm";

const ParentSignup = props => {
  return (
    <Welcome>
      <SignupForm {...props} />
    </Welcome>
  );
};

export default ParentSignup;

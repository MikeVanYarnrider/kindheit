import React from "react";
import { CSSTransition } from "react-transition-group";

import "../assets/stylesheet/components/welcome.scss";
import "../assets/stylesheet/components/app.scss";
import AnimationBoyGirl from "./lottieAnimations/AnimationBoyGirl";
// import AnimationWindmillSpinning from "./lottieAnimations/AnimationWindmillSpinning";

const Welcome = props => {
  const content = props.children;
  return (
    <div className="container-flex welcome">
      <div style={{ marginTop: "100px" }}>
        <AnimationBoyGirl />
      </div>

      <CSSTransition in appear classNames="app-fade" timeout={800}>
        <div className="welcome-box">{content}</div>
      </CSSTransition>
    </div>
  );
};

export default Welcome;

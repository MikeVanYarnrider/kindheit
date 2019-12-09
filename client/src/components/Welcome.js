import React from "react";
import "../assets/stylesheet/components/welcome.scss";

import AnimationBoyGirl from "./lottieAnimations/AnimationBoyGirl";
import AnimationWindmillSpinning from "./lottieAnimations/AnimationWindmillSpinning";

const Welcome = props => {
  const content = props.children;
  return (
    <div className="container-flex container-ratio welcome">
      <div className="welcome-animation">
        <AnimationBoyGirl classLotti="front" />
        <AnimationWindmillSpinning classLotti="back" />
      </div>

      <div className="welcome-box container-flex">{content}</div>
    </div>
  );
};

export default Welcome;

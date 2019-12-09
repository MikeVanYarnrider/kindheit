import React from "react";
import Lottie from "react-lottie";
import windmillSpinning from "./animationData/windmillSpinning";

const AnimationWindmillSpinning = props => {
  return (
    <div className={props.classLotti}>
      <Lottie
        direction={1}
        options={{
          animationData: windmillSpinning,
          loop: true
        }}
        height={500}
        width={370}
        eventListeners={[]}
      />
    </div>
  );
};

export default AnimationWindmillSpinning;

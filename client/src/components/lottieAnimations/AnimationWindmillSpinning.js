import React, { Component } from "react";
import Lottie from "react-lottie";
import windmillSpinning from "./animationData/windmillSpinning";

class AnimationWindmillSpinning extends Component {
  /* state = { isToggled: false, isStopped: false }; */

  render() {
    return (
/*       <button className="animationWrapperButton"
        style={{ border: "none !important", outline: "none !important" }}
        onClick={() => {
          this.setState({
            isToggled: !this.state.isToggled
          });
        }}
      > */
        <Lottie
          direction={1}
          //speed={1}
          options={{
            animationData:windmillSpinning,
            loop: true
          }}
          height={500}
          width={370}
          eventListeners={[
            // {
            //   eventName: "complete",
            //   callback: () => {
            //     this.setState({ isToggled: !this.state.isToggled });
            //   }
            // }
          ]}
        />
/*       </button> */
    );
  }
}

export default AnimationWindmillSpinning;
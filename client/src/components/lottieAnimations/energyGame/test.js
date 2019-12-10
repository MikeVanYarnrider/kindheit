import React, { Component } from "react";
import Lottie from "react-lottie";
import animationBoyGirl from "./animationData/";

class AnimationBoyGirl extends Component {
  state = { isToggled: false, isStopped: false /* isClicked: false */ };

  render() {
    return (
      <button
        className="animationWrapperButton"
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent"
        }}
        onClick={() => {
          this.setState({
            isToggled: !this.state.isToggled
          });
        }}
      >
        <Lottie
          direction={this.state.isToggled ? 1 : -1}
          //speed={1}
          options={{
            animationData: animationBoyGirl,
            autoplay: false,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          isStopped={!this.state.isToggled}
          isPaused={false}
          height={500}
          segments={[15, 20]}
          forceSegment={false}
          width={370}
          isClickToPauseDisabled={true}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                this.setState({ isToggled: !this.state.isToggled });
              }
            }
          ]}
        />
      </button>
    );
  }
}

export default AnimationBoyGirl;

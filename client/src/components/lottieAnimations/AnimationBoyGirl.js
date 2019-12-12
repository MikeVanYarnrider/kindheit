import React, { Component } from "react";
import Lottie from "react-lottie";
import animationBoyGirl from "./animationData/animationBoyGirl";

class AnimationBoyGirl extends Component {
  state = { isToggled: false, isStopped: false };

  resetFrame = () => {
    return this.setState({ isToggled: !this.state.isToggled });
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.isToggled === this.state.isToggled && this.resetFrame();
  }

  render() {
    return (
      <div className={this.props.classLotti}>
        <Lottie
          direction={this.state.isToggled ? 1 : -1}
          options={{
            animationData: animationBoyGirl,
            loop: false
          }}
          isStopped={!this.state.isToggled}
          height={500}
          width={370}
          onClick={() => {
            this.setState({
              isToggled: !this.state.isToggled
            });
          }}
          eventListeners={[
            {
              eventName: "complete",
              callback: this.resetFrame
            }
          ]}
        />
      </div>
    );
  }
}

export default AnimationBoyGirl;

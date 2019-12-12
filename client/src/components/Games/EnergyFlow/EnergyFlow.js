import React, { Component } from "react";
import AnimationEnergyGame from "../../lottieAnimations/energyGame/AnimationEnergyGame";
import "../../../assets/stylesheet/_variables.scss";
import axios from "axios";

class EnergyFlow extends Component {
  state = {
    isFinished: false,
    gameTime: 0
  };

  postGameTime = () => {
    const { gameId } = this.props.match.params;
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - this.state.gameStartTime) / 1000;
    axios
      .post("/child/play/device/energyflow", {
        gameTime: gameTime,
        user: this.props.user,
        game: gameId
      })
      .then(response => {
        // console.log(response);
        this.props.getRestrictionTime(response.data.restricted);
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.setState({
      gameStartTime: new Date()
    });
    window.addEventListener("beforeunload", this.postGameTime);
  };

  componentWillUnmount = () => {
    this.postGameTime();
    window.removeEventListener("beforeunload", this.postGameTime);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "calc(100vh - 5rem)"
        }}
      >
        <div style={{ width: "850px", height: "580px" }}>
          <div style={{ borderRadius: "20px" }}>
            <AnimationEnergyGame />
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyFlow;

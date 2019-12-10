import React, { Component } from "react";
import AnimationEnergyGame from "../../lottieAnimations/energyGame/AnimationEnergyGame";
import "../../../assets/stylesheet/_variables.scss";

class EnergyFlow extends Component {
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
        <div
          style={{ backgroundColor: "black", width: "850px", height: "580px" }}
        >
          <div style={{ borderRadius: "20px" }}>
            <AnimationEnergyGame />
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyFlow;

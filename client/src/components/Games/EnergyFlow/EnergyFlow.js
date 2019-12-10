import React, { Component } from "react";
import AnimationBoyGirl from "../../lottieAnimations/Test"

class EnergyFlow extends Component {


  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw"}}>
      <div style={{marginTop: "100px", backgroundColor: "black", width: "850px", height: "550px"}}>
               <div style={{marginLeft: "-110px", position: "absolute"}}><AnimationBoyGirl /></div>
               <div style={{marginLeft: "50px", position: "absolute"}}><AnimationBoyGirl /></div>
      </div>
 
      </div>
    );
  }
}

export default EnergyFlow;

import React, { Component } from "react";
import Lottie from "react-lottie";
import Modal from "../../modal/Modal";

//ANIMATIONS
import animationBackground from "../energyGame/background.json";
import cloudsBlowing from "../energyGame/clouds_blowing.json";
import cloudsWaiting from "../energyGame/clouds_waiting.json";
import windmills from "../energyGame/windmills.json";
import house from "../energyGame/house.json";
import electricbox from "../energyGame/electricbox.json";
import powerLineSolo from "../energyGame/powerline_solo.json";
import powerLineFirstTrack from "../energyGame/powerline_firsttrack.json";
import powerLineSouthTrackClosing from "../energyGame/powerline_southtrack.json";
import powerLineSouthTrackStatic from "../energyGame/powerline_southtrack_static.json";
import powerLineNorthTrackClosing from "../energyGame/powerline_northtrack.json";
import powerLineNorthTrackStatic from "../energyGame/powerline_northtrack_static.json";
import trainArrive from "../energyGame/train.json";
import trainLeaving from "../energyGame/train_Leaving.json";
import schrankeBack from "../energyGame/schrankeBack.json";
import schrankeBackStatic from "../energyGame/schrankeBackStatic.json";
import schrankeFront from "../energyGame/schrankeFront.json";
import schrankeFrontStatic from "../energyGame/schrankeFrontStatic.json";
import schrankeFrontMovingBack from "../energyGame/schrankeFront_movingBack.json";
import schrankeBackMovingBack from "../energyGame/schrankeBack_movingBack.json";
import loadingCarStation from "../energyGame/loadingCarStation.json";
import loadingCarStationStatic from "../energyGame/loadingCarStation_Static.json";
import carArrive from "../energyGame/car_Incoming.json";
import carLeaving from "../energyGame/car_Leaving.json";
import trafficLightToGreen from "../energyGame/traffic_light_redToGreen.json";
import trafficLightToRed from "../energyGame/traffic_light_greenToRed.json";
import trafficLightOff from "../energyGame/traffic_light_off.json";
import kidsMoving from "../energyGame/kidsMoving.json";
import kidsStanding from "../energyGame/kidsStanding.json";
import blitz from "../energyGame/blitz.json";

const House = () => {
  return (
    <Lottie
      options={{
        direction: 1,
        animationData: house,
        autoplay: false,
        loop: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
      isStopped={false}
      isPaused={false}
      height={150}
      width={150}
      isClickToPauseDisabled={true}
    />
  );
};
const ElectricBox = () => {
  return (
    <Lottie
      options={{
        direction: 1,
        animationData: electricbox,
        autoplay: false,
        loop: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
      isStopped={false}
      isPaused={false}
      height={50}
      width={50}
      isClickToPauseDisabled={true}
    />
  );
};
const PowerlineSolo = () => {
  return (
    <Lottie
      options={{
        direction: 1,
        animationData: powerLineSolo,
        autoplay: false,
        loop: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
      isStopped={false}
      isPaused={false}
      height={250}
      width={500}
      isClickToPauseDisabled={true}
    />
  );
};

class AnimationEnergyGame extends Component {
  state = {
    cloudAnimation: cloudsWaiting,
    cloudsActivated: false,
    powerLineFirstTrack: "",
    cloudsegments: [],
    powerLineSouthTrack: powerLineSouthTrackStatic,
    powerLineSouthClosed: false,
    powerLineNorthClosed: false,
    powerLineNorthTrack: powerLineNorthTrackStatic,
    trainAnimation: trainArrive,
    schrankeBackAnimation: schrankeBackStatic,
    schrankeFrontAnimation: schrankeFrontStatic,
    schrankeStopped: false,
    carStationAnimation: loadingCarStationStatic,
    carAnimation: carArrive,
    trafficLightTrainAnimation: trafficLightOff,
    trafficLightCarAnimation: trafficLightOff,
    trafficLightPedestrians: trafficLightOff,
    kidsAnimation: kidsStanding,
    positionBlitz: ["355px", "35px"],
    blitzAnimation: blitz,
    isFinished: false
  };

  cloudChange = event => {
    if (!this.state.cloudsActivated) {
      this.setState({
        cloudAnimation: cloudsBlowing,
        cloudsActivated: true,
        cloudsegments: [41, 78],
        powerLineFirstTrack: powerLineFirstTrack,
        positionBlitz: ["600px", "300px"]
      });
    }
  };
  southTrackChange = event => {
    // console.log("CLICK");
    if (this.state.cloudsActivated && !this.state.powerLineSouthClosed) {
      this.setState(
        {
          powerLineSouthTrack: powerLineSouthTrackClosing,
          powerLineSouthClosed: true,
          schrankeBackAnimation: schrankeBack,
          schrankeFrontAnimation: schrankeFront,
          trafficLightTrainAnimation: trafficLightToGreen,
          trafficLightCarAnimation: trafficLightToRed,
          positionBlitz: ["530px", "180px"]
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                trainAnimation: trainLeaving
              },
              () => {
                setTimeout(() => {
                  this.setState(
                    {
                      schrankeFrontAnimation: schrankeFrontMovingBack,
                      schrankeBackAnimation: schrankeBackMovingBack,
                      trafficLightCarAnimation: trafficLightToGreen,
                      trafficLightTrainAnimation: trafficLightToRed
                    },
                    () => {
                      // console.log("Hallo");
                    }
                  );
                }, 4000);
              }
            );
          }, 1000);
        }
      );
    }
  };
  northTrackChange = event => {
    if (this.state.cloudsActivated && this.state.powerLineSouthClosed) {
      this.setState(
        {
          powerLineNorthTrack: powerLineNorthTrackClosing,
          powerLineNorthClosed: true,
          trafficLightPedestrians: trafficLightToGreen,

          positionBlitz: ["130px", "180px"]
        },
        () => {
          setTimeout(() => {
            this.setState({ kidsAnimation: kidsMoving });
          }, 1000);
        }
      );
    }
  };

  carStationChange = event => {
    if (this.state.powerLineNorthClosed) {
      this.setState(
        {
          carStationAnimation: loadingCarStation,
          trafficLightPedestrians: trafficLightToRed,
          blitzAnimation: ""
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                carAnimation: carLeaving
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    isFinished: true
                  });
                }, 7000);
              }
            );
          }, 1000);
        }
      );
    }
  };

  //RESTART
  restartGame = _ => {
    this.setState({
      cloudAnimation: cloudsWaiting,
      cloudsActivated: false,
      powerLineFirstTrack: "",
      cloudsegments: [],
      powerLineSouthTrack: powerLineSouthTrackStatic,
      powerLineSouthClosed: false,
      powerLineNorthClosed: false,
      powerLineNorthTrack: powerLineNorthTrackStatic,
      trainAnimation: trainArrive,
      schrankeBackAnimation: schrankeBackStatic,
      schrankeFrontAnimation: schrankeFrontStatic,
      schrankeStopped: false,
      carStationAnimation: loadingCarStationStatic,
      carAnimation: carArrive,
      trafficLightTrainAnimation: trafficLightOff,
      trafficLightCarAnimation: trafficLightOff,
      trafficLightPedestrians: trafficLightOff,
      kidsAnimation: kidsStanding,
      positionBlitz: ["355px", "35px"],
      blitzAnimation: blitz,
      isFinished: false
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isFinished && (
          <Modal
            isOpen={this.state.isFinished}
            btnAction="Restart"
            variant="btn-pill btn-start"
            onBtnClick={() => this.restartGame()}
            onClose={this.handleInstructions}
          >
            <h1>Finished!</h1>
          </Modal>
        )}

        {/* BUTTONS */}

        {/* CARSTATION BUTTON */}
        <div
          className="carStationActivationButton"
          style={{
            zIndex: "200",
            background: "transparent",
            position: "absolute",
            height: "45px",
            width: "60px",
            marginTop: "225px",
            marginLeft: "170px"
          }}
          onClick={this.carStationChange}
        ></div>

        {/* NORTHTHTRACK BUTTON */}
        <div
          className="southTrackActivationButton"
          style={{
            zIndex: "200",
            background: "transparent",
            position: "absolute",
            height: "50px",
            width: "60px",
            marginTop: "205px",
            marginLeft: "560px"
          }}
          onClick={this.northTrackChange}
        ></div>

        {/* SOUTHTRACK BUTTON */}
        <div
          className="southTrackActivationButton"
          style={{
            zIndex: "200",
            background: "transparent",
            position: "absolute",
            height: "50px",
            width: "60px",
            marginTop: "325px",
            marginLeft: "627px"
          }}
          onClick={this.southTrackChange}
        ></div>

        {/* CLOUD ACTIVATION BUTTON */}
        <div
          className="cloudsActivationButton"
          style={{
            zIndex: "200",
            background: "transparent",
            position: "absolute",
            height: "200px",
            width: "500px"
          }}
          onClick={this.cloudChange}
        ></div>

        {/* Blitz */}
        <div
          className="blitz"
          style={{
            zIndex: "110",
            background: "transparent",
            position: "absolute",
            width: "100px",
            marginLeft: this.state.positionBlitz[0],
            marginTop: this.state.positionBlitz[1]
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.blitzAnimation,
              autoplay: true,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            forceSegments={true}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* ElectricBox */}
        <div
          className="electricBox"
          style={{
            zIndex: "20",
            background: "transparent",
            position: "absolute",
            width: "100px",
            marginLeft: "650px",
            marginTop: "250px"
          }}
        >
          <ElectricBox />
        </div>

        {/* HOUSE */}
        <div
          className="windmills"
          style={{
            zIndex: "20",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "240px",
            marginTop: "115px"
          }}
        >
          <House />
        </div>

        {/* Windmills */}
        <div
          className="windmills"
          style={{
            zIndex: "5",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "380px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: windmills,
              autoplay: this.state.cloudsActivated,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={210}
            width={300}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* CLOUDS Waiting */}
        <div
          className="cloudsPassive"
          style={{
            zIndex: "100",
            background: "transparent",
            position: "absolute",
            width: "500px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.cloudAnimation,
              autoplay: true,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            segments={this.state.cloudsegments}
            forceSegments={true}
            height={200}
            width={850}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* Ampel Pedestrian Front */}
        <div
          className="ampelPedestrianFront"
          style={{
            zIndex: "4",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "100px",
            marginTop: "222px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.trafficLightPedestrians,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={50}
            width={50}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* Ampel Pedestrian back */}
        <div
          className="ampelPedestrianBack"
          style={{
            zIndex: "4",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "52px",
            marginTop: "285px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.trafficLightPedestrians,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={50}
            width={50}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* Kids */}
        <div
          className="kids"
          style={{
            zIndex: "3",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "80px",
            marginTop: "140px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.kidsAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={220}
            width={70}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* Ampel Auto */}
        <div
          className="Ampel Auto"
          style={{
            zIndex: "4",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "345px",
            marginTop: "390px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.trafficLightCarAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={50}
            width={50}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* SchrankeFront */}
        <div
          className="SchrankeFront"
          style={{
            zIndex: "6",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "300px",
            marginTop: "280px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.schrankeFrontAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={150}
            width={150}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* Ampel Zug */}
        <div
          className="Ampel Zug"
          style={{
            zIndex: "4",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "220px",
            marginTop: "320px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.trafficLightTrainAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={50}
            width={50}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* TRAIN ARRIVE */}
        <div
          className="Train"
          style={{
            zIndex: "5",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "0",
            marginTop: "355px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.trainAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            forceSegments={true}
            height={50}
            width={850}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* SchrankeBack */}
        <div
          className="SchrankeBack"
          style={{
            zIndex: "4",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "310px",
            marginTop: "270px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.schrankeBackAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            height={150}
            width={150}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* CAR ARRIVE */}
        <div
          className="Car"
          style={{
            zIndex: "30",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "0",
            marginTop: "210px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.carAnimation,
              autoplay: true,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            forceSegments={true}
            height={320}
            width={850}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* STATION CAR */}
        <div
          className="Carstation"
          style={{
            zIndex: "2",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "22px",
            marginTop: "179px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.carStationAnimation,
              autoplay: false,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            forceSegments={true}
            height={90}
            width={200}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* POWERLINE NORTHTRACK */}
        <div
          className="NorthTrack"
          style={{
            zIndex: "2",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "271px",
            marginTop: "131px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.powerLineNorthTrack,
              autoplay: false,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            segments={[35, 46]}
            forceSegments={true}
            height={250}
            width={500}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* POWERLINE SOUTHTRACK */}
        <div
          className="SouthTrack"
          style={{
            zIndex: "3",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "271px",
            marginTop: "131px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.powerLineSouthTrack,
              autoplay: false,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            segments={[25, 30]}
            forceSegments={true}
            height={250}
            width={500}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* POWERLINE FIRSTTRACK */}
        <div
          className="cloudsPassive"
          style={{
            zIndex: "2",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "271px",
            marginTop: "131px"
          }}
        >
          <Lottie
            options={{
              direction: 1,
              animationData: this.state.powerLineFirstTrack,
              autoplay: true,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={false}
            isPaused={false}
            segments={[41, 72]}
            forceSegments={true}
            height={250}
            width={500}
            isClickToPauseDisabled={true}
          />
        </div>

        {/* PowerlineSolo */}
        <div
          className="powerlineSolo"
          style={{
            zIndex: "1",
            background: "transparent",
            position: "absolute",
            width: "500px",
            marginLeft: "271px",
            marginTop: "131px"
          }}
        >
          <PowerlineSolo />
        </div>

        {/* //BACKGROUND */}
        <div className="backgroundWrapper" style={{ zIndex: "0" }}>
          <Lottie
            options={{
              animationData: animationBackground,
              autoplay: false,
              loop: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isStopped={true}
            isPaused={true}
            height={580}
            width={850}
            isClickToPauseDisabled={true}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AnimationEnergyGame;

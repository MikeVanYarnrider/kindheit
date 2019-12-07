import React, { useState, useEffect } from "react";
/* import { disablePageScroll, enablePageScroll } from "scroll-lock"; */
import axios from "axios";

import { Game } from "./common/styles";
import { GameContainer, WinContainer } from "./styles";

import DraggableList from "./components/DraggableList";

import {
  pathImage1,
  pathImage2,
  pathImage3,
  pathImage4,
  pathBGImage
} from "../../../images";

export default props => {
  let [gameStartTime, setGameStartTime] = useState("");

  const images = {
    "1.png": pathImage1,
    "2.png": pathImage2,
    "3.png": pathImage3,
    "4.png": pathImage4,
    "bg.png": pathBGImage
  };

  const [currentImage, setCurrentImage] = useState(null);
  const [completed, setCompleted] = useState(false);

  const postGameTime = () => {
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - gameStartTime) / 1000;
    axios
      .post("/child/play/device/puzzle", {
        gameTime: gameTime,
        user: props.user
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // screen time tracking
    const date = new Date();
    setGameStartTime((gameStartTime = date));
    window.addEventListener("beforeunload", postGameTime);

    // puzzle
    if (Object.keys(images).length > 0) {
      setCurrentImage(images["1.png"]);
    }

    return () => {
      postGameTime();
      window.removeEventListener("beforeunload", postGameTime);
    };
  }, []);

  let content = (
    <DraggableList
      items={"1 2 3 4 5".split(" ")}
      setCompleted={setCompleted}
      img={currentImage}
    />
  );

  if (completed) {
    content = (
      <WinContainer>
        <img src={currentImage} alt="puzzle" />
      </WinContainer>
    );
  }

  const select = event => {
    console.log(event.target.src);
    const image = event.target.closest("img");
    if (image) {
      setCurrentImage(image.src);
      setCompleted(false);
    }
  };

  return (
    <Game bg={images["bg.png"]} size="400px" min-height="100vw" filter="1">
      <div
        className="wrapper"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <GameContainer>
          <div className="options" onClick={select}>
            <img src={pathImage1} alt="puzzle1" />
            <img src={pathImage2} alt="puzzle2" />
            <img src={pathImage3} alt="puzzle3" />
            <img src={pathImage1} alt="puzzle4" />
          </div>
          <div className="inner">{content}</div>
        </GameContainer>
      </div>
    </Game>
  );
};

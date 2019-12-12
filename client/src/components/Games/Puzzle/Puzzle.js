import React, { useState, useEffect } from "react";
import axios from "axios";

import { Game } from "./common/styles";
import { GameContainer, WinContainer } from "./styles";

import DraggableList from "./components/DraggableList";
import Modal from "../../modal/Modal";

import {
  pathImage1,
  pathImage2,
  pathImage3,
  pathImage4,
  pathBGImage
} from "../../../images";

export default props => {
  let [gameStartTime, setGameStartTime] = useState(null);

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
    const { gameId } = props.match.params;
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - gameStartTime) / 1000;
    axios
      .post("/child/play/device/puzzle", {
        gameTime: gameTime,
        user: props.user,
        game: gameId
      })
      .then(response => {
        props.getRestrictionTime(response.data.restricted);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const date = new Date();
    setGameStartTime((gameStartTime = date));
    window.addEventListener("beforeunload", postGameTime);

    // puzzle
    if (Object.keys(images).length > 0) {
      setCurrentImage(images["4.png"]);
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
            <img
              style={{ boxShadow: "3px 3px 5px rgba(0, 68, 75, 0.8)" }}
              src={pathImage1}
              alt="puzzle1"
            />
            <img
              style={{ boxShadow: "3px 3px 5px rgba(0, 68, 75, 0.8)" }}
              src={pathImage2}
              alt="puzzle2"
            />
            <img
              style={{ boxShadow: "3px 3px 5px rgba(0, 68, 75, 0.8)" }}
              src={pathImage3}
              alt="puzzle3"
            />
            <img
              style={{ boxShadow: "3px 3px 5px rgba(0, 68, 75, 0.8)" }}
              src={pathImage4}
              alt="puzzle4"
            />
          </div>
          <div className="inner">{content}</div>
        </GameContainer>
      </div>
      {completed && (
        <Modal
          isOpen={completed}
          classCustom="finished"
          variant="btn-rnd btn-restart"
          onBtnClick={() => setCompleted(false)}
          finished={true}
        ></Modal>
      )}
    </Game>
  );
};

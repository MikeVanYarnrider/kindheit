import React, { Component } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import Modal from "../../modal/Modal";

import "../../../assets/stylesheet/components/memory.scss";

import { shuffle } from "./assets/utils";
import {
  memoryImage1,
  memoryImage2,
  memoryImage3,
  memoryImage4
} from "../../../images";

const cards = [
  { name: "teddy", img: memoryImage1 },
  { name: "elephant", img: memoryImage2 },
  { name: "lion", img: memoryImage3 },
  { name: "monkey", img: memoryImage4 }
];

class Game extends Component {
  state = {
    shuffledCards: shuffle(cards),
    pickedCards: [],
    flippedCards: [],
    isFinished: false,
    gameTime: 0
  };

  postGameTime = () => {
    const { gameId } = this.props.match.params;
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - this.state.gameStartTime) / 1000;
    axios
      .post("/child/play/handsgames/foldtrain", {
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

  pickCard(card) {
    const { shuffledCards, pickedCards, flippedCards } = this.state;
    let flipped = shuffledCards.find((el, index) => index === card);

    this.setState(
      {
        pickedCards: [...pickedCards, card],
        flippedCards: [...flippedCards, flipped.name]
      },
      () => {
        this.checkPair();
      }
    );
  }

  checkPair = _ => {
    const { shuffledCards, pickedCards, flippedCards } = this.state;

    if (flippedCards.length === 2) {
      if (flippedCards[0] === flippedCards[1]) {
        this.setState({
          flippedCards: []
        });

        pickedCards.length === shuffledCards.length && this.finishGame();
      } else {
        this.resetCards();
      }
    }
  };

  finishGame = _ => {
    setTimeout(() => {
      this.setState({
        isFinished: true
      });
    }, 750);
  };

  resetCards = _ => {
    setTimeout(() => {
      const arr = this.state.pickedCards.slice(0, -2);
      this.setState({
        flippedCards: [],
        pickedCards: arr
      });
    }, 750);
  };

  restartGame = _ => {
    this.setState({
      shuffledCards: shuffle(cards),
      pickedCards: [],
      flippedCards: [],
      isFinished: false
    });
  };

  render() {
    return (
      <div className="container-flex game memory">
        <div className="game-wrapper wrapper">
          {this.state.shuffledCards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                flipped={this.state.pickedCards.includes(index)}
                onClick={() => this.pickCard(index)}
              />
            );
          })}
        </div>
        {this.state.isFinished && (
          <Modal
            isOpen={this.state.isFinished}
            classCustom="finished"
            variant="btn-rnd btn-restart"
            onBtnClick={() => this.restartGame()}
            finished={true}
          ></Modal>
        )}
      </div>
    );
  }
}

export default Game;

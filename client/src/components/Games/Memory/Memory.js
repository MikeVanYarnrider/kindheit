import React, { Component } from "react";

import "../../../assets/stylesheet/components/memory.scss";

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

class Card extends Component {
  handleClick = card => {
    this.props.onClick(card);
  };

  render() {
    return (
      <div
        className={`card ${this.props.flipped && "turned"}`}
        onClick={() => this.handleClick(this.props.card.name)}
      >
        <div className="card-back"></div>
        <div className="card-front">
          <img src={this.props.card.img} alt={this.props.card.name} />
        </div>
      </div>
    );
  }
}

class Memory extends Component {
  state = {
    cards: cards,
    shuffledCards: this.shuffleCards(cards),
    pickedCards: [],
    flippedCards: []
  };

  shuffleCards(arr) {
    const mixed = Array(2)
      .fill(arr)
      .flat();

    let currentIndex = mixed.length,
      tempValue,
      randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = mixed[currentIndex];
      mixed[currentIndex] = mixed[randomIndex];
      mixed[randomIndex] = tempValue;
    }

    return mixed;
  }

  pickCard(card) {
    let flipped = this.state.shuffledCards.find((el, index) => index === card);

    this.setState(
      {
        pickedCards: [...this.state.pickedCards, card],
        flippedCards: [...this.state.flippedCards, flipped.name]
      },
      () => {
        this.checkPair();
      }
    );
  }

  checkPair = _ => {
    if (this.state.flippedCards.length === 2) {
      if (this.state.flippedCards[0] === this.state.flippedCards[1]) {
        this.setState({
          flippedCards: []
        });
      } else {
        setTimeout(() => {
          const arr = this.state.pickedCards.slice(0, -2);
          this.setState({
            flippedCards: [],
            pickedCards: arr
          });
        }, 750);
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.shuffledCards.map((card, index, arr) => {
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
    );
  }
}

export default Memory;

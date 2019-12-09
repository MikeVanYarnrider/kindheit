import React, { Component } from "react";
import "../../../../src/assets/stylesheet/components/slider.scss";
import Button from "../../Button";
import Slide from "../../Slide";
import axios from "axios";
import {
  lego1,
  lego2,
  lego3,
  lego4,
  lego5,
  lego6,
  lego7,
  lego8
} from "../../../images";

export default class LegoBuild extends Component {
  state = {
    images: [lego1, lego2, lego3, lego4, lego5, lego6, lego7, lego8],
    currentIndex: 0,
    translateValue: 0,
    gameStartTime: "",
    gameTime: 0
  };

  postGameTime = () => {
    const { gameId } = this.props.match.params;
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - this.state.gameStartTime) / 1000;
    axios
      .post("/child/play/handsgames/legobuild", {
        gameTime: gameTime,
        user: this.props.user,
        game: gameId
      })
      .then(response => {
        // console.log(response);
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.setState(
      {
        gameStartTime: new Date()
      },
      () => {
        // console.log(this.state.gameStartTime);
      }
    );
    window.addEventListener("beforeunload", this.postGameTime);
  };

  componentWillUnmount = () => {
    this.postGameTime();
    window.removeEventListener("beforeunload", this.postGameTime);
  };

  handleClick = direction => {
    direction === "left"
      ? this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
        }))
      : this.state.currentIndex === this.state.images.length - 1
      ? this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      : // This will not run if we met the if condition above
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -this.slideWidth()
        }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="container">
        <div id="lego">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s"
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>
        </div>
        <div className="flex-slider">
          {this.state.currentIndex > 0 && (
            <Button
              style={{ position: "absolute" }}
              variant="btn-rnd back"
              onClick={() => this.handleClick("left")}
            />
          )}

          <span>
            {" "}
            <h4>Description</h4>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus vero fugiat sapiente,
          </span>

          <Button
            variant="btn-rnd forward"
            onClick={() => this.handleClick("right")}
          />
        </div>
      </div>
    );
  }
}

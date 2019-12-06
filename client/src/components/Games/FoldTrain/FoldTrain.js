import React, { Component } from "react";
import "../../../../src/assets/stylesheet/components/slider.scss";
import Button from "../../Button";
import Slide from "../../Slide";
import axios from "axios";

export default class FoldTrain extends Component {
  state = {
    images: [
      "https://www.wikihow.com/images/thumb/e/ef/Draw-a-Train-Step-8.jpg/aid2543931-v4-900px-Draw-a-Train-Step-8.jpg",
      "https://www.wikihow.com/images/thumb/2/2e/Draw-a-Train-Step-9.jpg/aid2543931-v4-900px-Draw-a-Train-Step-9.jpg",
      "https://www.wikihow.com/images/thumb/d/d7/Draw-a-Train-Step-10.jpg/aid2543931-v4-900px-Draw-a-Train-Step-10.jpg",
      "https://www.wikihow.com/images/thumb/a/aa/Draw-a-Train-Step-11.jpg/aid2543931-v4-900px-Draw-a-Train-Step-11.jpg",
      "https://www.wikihow.com/images/thumb/d/d0/Draw-a-Train-Step-12.jpg/aid2543931-v4-900px-Draw-a-Train-Step-12.jpg",
      "https://www.wikihow.com/images/thumb/d/d4/Draw-a-Train-Step-13.jpg/aid2543931-v4-900px-Draw-a-Train-Step-13.jpg",
      "https://www.wikihow.com/images/thumb/1/17/Draw-a-Train-Step-14.jpg/aid2543931-v4-900px-Draw-a-Train-Step-14.jpg",
      "https://www.wikihow.com/images/thumb/0/09/Draw-a-Train-Step-15.jpg/aid2543931-v4-900px-Draw-a-Train-Step-15.jpg"
    ],
    currentIndex: 0,
    translateValue: 0,
    gameStartTime: "",
    gameTime: 0
  };

  componentDidMount = () => {
    console.log("did mount");
    this.setState(
      {
        gameStartTime: new Date()
      },
      () => {
        // console.log(this.state.gameStartTime);
      }
    );
  };

  componentWillUnmount = () => {
    console.log("did unmount");
    const gameEndTime = new Date();
    const gameTime = (gameEndTime - this.state.gameStartTime) / 1000;
    // console.log(gameTime);
    // console.log(this.state.gameTime);
    console.log("axios post");
    axios
      .post("/child/play/handsgames/foldtrain", {
        gameTime: gameTime,
        user: this.props.user
      })
      .then(response => {
        console.log("ROUTE??", response);
      })
      .catch(err => console.log(err));
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
    console.log(this.props.user);
    return (
      <div>
        <div className="slider" id="train">
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
        <div className="flex">
          {this.state.currentIndex > 0 && (
            <Button
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

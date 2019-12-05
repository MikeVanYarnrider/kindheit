import React, { Component } from "react";
import "../../../../src/assets/stylesheet/components/slider.scss";
import Button from "../../Button";
import Slide from "../../Slide";

export default class FoldTrain extends Component {
  state = {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
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
    console.log("PROPS FROM SLIDER", this.props);
    return (
      <div>
        <div className="slider">
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
        <div>
          <Button
            variant="btn-rnd back"
            onClick={() => this.handleClick("left")}
          />
          <Button
            variant="btn-rnd forward"
            onClick={() => this.handleClick("right")}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../assets/stylesheet/components/ChildrenLogin/childrenLoginPasswort.scss";

import {
  passwordImg1,
  passwordImg2,
  passwordImg3,
  passwordImg4
} from "../../images";

const passWordImageArr = [
  passwordImg1,
  passwordImg2,
  passwordImg3,
  passwordImg4
];

class ChildrenPassword extends Component {
  state = {
    passwordImages: this.props.passwordImages,
    changeImage: this.props.changeImage
  };

  signupImageSelect = event => {
    let url = event.target.src;
    let imageState = this.state.passwordImages;
    let imageToBeChanged = this.state.changeImage - 1;

    if (this.state.changeImage > 0) {
      imageState[imageToBeChanged] = url;
      this.setState({
        passwordImages: this.state.passwordImages,
        changeImage: 0
      });
    } else if (imageState.length < 4) {
      this.state.passwordImages.push(url);
    }
    let selectNum = imageState.map(el => el.match(/media[/](\d)/)[1]);
    this.setState({
      passwordImages: this.state.passwordImages,
      changeImage: 0
    });

    this.props.setPasswordImage(this.state.passwordImages);
    this.props.setPassword(selectNum.join(""));
  };

  signupImageChange = event => {
    let changeImageNum = event.currentTarget.id;
    this.setState({ changeImage: changeImageNum });
    this.props.setChangePassword(changeImageNum);
  };

  render() {
    let imageState = this.state.passwordImages;
    let passwordImageSize = "50px";
    return (
      <div
        className="passwordWrapper"
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Form.Group
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {[1, 2, 3, 4].map(passwordIndex => {
            return (
              <button
                key={passwordIndex}
                id={passwordIndex}
                type="button"
                className="selected-btn"
                onClick={this.signupImageChange}
              >
                <div
                  className="selectedField"
                  style={{
                    backgroundImage: `url(${imageState[passwordIndex - 1]})`
                  }}
                ></div>
              </button>
            );
          })}
        </Form.Group>
        <Form.Group>
          {passWordImageArr.map((image, index) => {
            return (
              <button key={index} type="button">
                <img
                  height={passwordImageSize}
                  width={passwordImageSize}
                  src={image}
                  alt={image}
                  onClick={this.signupImageSelect}
                />
              </button>
            );
          })}
        </Form.Group>
      </div>
    );
  }
}

export default ChildrenPassword;

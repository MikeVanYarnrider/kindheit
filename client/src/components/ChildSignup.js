import React, { Component } from "react";
import { signupChild } from "./services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/stylesheet/components/sliderProfile.scss";

import {
  passwordImg1,
  passwordImg2,
  passwordImg3,
  passwordImg4,
  profileImgDragon,
  profileImgPrincess,
  profileImgBoy,
  profileImgCrocodile,
  profileImgCow,
  profileImgPig
} from "../images";

const profileImgArr = [
  profileImgDragon,
  profileImgPrincess,
  profileImgBoy,
  profileImgCrocodile,
  profileImgCow,
  profileImgPig
];

class ChildSignup extends Component {
  state = {
    childname: "",
    password: "",
    birthDate: "",
    profileImgUrl: profileImgArr[0],
    chosenProfileImg: 0,
    parent: this.props.parentUser._id,
    passwordImages: [],
    changeImage: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    signupChild(
      this.state.childname,
      this.state.password,
      this.state.birthDate,
      this.state.profileImgUrl,
      this.state.parent
    ).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        console.log(data);
        this.props.setUser(data);
        this.props.history.push("/");
      }
    });
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
      password: selectNum.join(""),
      changeImage: 0
    });
  };

  signupImageChange = event => {
    let changeImageNum = event.currentTarget.id;
    this.setState({ changeImage: changeImageNum });
  };

  selectProfileImage = event => {
    this.setState({
      chosenProfileImg: event,
      profileImgUrl: profileImgArr[event]
    });
  };

  render() {
    console.log(this.state.profileImgUrl);
    let imageState = this.state.passwordImages;

    let styles = {
      margin: "auto",
      width: "500px"
      /*     backgroundColor: "white" */
    };

    let passwordImageSize = "50px";

    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Child Signup</h1>
        <Form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "75vh"
          }}
        >
          <div>
            {" "}
            <Form.Group>
              <Form.Label style={{ color: "white" }} htmlFor="childname">
                Childname:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="childname"
                id="childname"
                value={this.state.childname}
                onChange={this.handleChange}
              />
            </Form.Group>
            <div style={(styles, { margin: "30px 0 0 0" })}>
              <Carousel
                autoPlay={false}
                interval={10000}
                showThumbs={true}
                showArrows={false}
                infiniteLoop={true}
                showStatus={false}
                onClickItem={this.selectProfileImage}
                onClickThumb={this.selectProfileImage}
                dynamicHeight={true}
                centerSlidePercentage={50}
                height={100}
                selectedItem={this.state.chosenProfileImg}
              >
                <div>
                  <img
                    src={profileImgDragon}
                    style={{ borderRadius: "50%" }}
                    alt="dragon"
                  />
                  {/*               <p className="legend">Hong Kong</p> */}
                </div>
                <div>
                  <img
                    src={profileImgPrincess}
                    style={{ borderRadius: "50%" }}
                    alt="princess"
                  />
                  {/*               <p className="legend">hjhjhjh</p> */}
                </div>
                <div>
                  <img
                    src={profileImgBoy}
                    style={{ borderRadius: "50%" }}
                    alt="boy"
                  />
                  {/*    <p className="legend">Japan</p> */}
                </div>
                <div>
                  <img
                    src={profileImgCrocodile}
                    style={{ borderRadius: "50%" }}
                    alt="crocodile"
                  />
                  {/*          <p className="legend">Las Vegas</p> */}
                </div>
                <div>
                  <img
                    src={profileImgCow}
                    style={{ borderRadius: "50%" }}
                    alt="cow"
                  />
                  {/*          <p className="legend">Las Vegas</p> */}
                </div>
                <div>
                  <img
                    src={profileImgPig}
                    style={{ borderRadius: "50%" }}
                    alt="pig"
                  />
                  {/*       <p className="legend">Las Vegas</p> */}
                </div>
              </Carousel>
            </div>
          </div>

          <div>
            <Form.Group>
              <button
                type="button"
                style={{
                  border: "2px solid rgba(0,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius: "50%"
                }}
              >
                <img
                  height={passwordImageSize}
                  width={passwordImageSize}
                  src={passwordImg1}
                  alt=""
                  onClick={this.signupImageSelect}
                />
              </button>
              <button
                type="button"
                style={{
                  border: "2px solid rgba(0,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius: "50%"
                }}
              >
                <img
                  height={passwordImageSize}
                  width={passwordImageSize}
                  src={passwordImg2}
                  alt=""
                  onClick={this.signupImageSelect}
                />
              </button>
              <button
                type="button"
                style={{
                  border: "2px solid rgba(0,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius: "50%"
                }}
              >
                <img
                  height={passwordImageSize}
                  width={passwordImageSize}
                  src={passwordImg3}
                  alt=""
                  onClick={this.signupImageSelect}
                />
              </button>
              <button
                type="button"
                style={{
                  border: "2px solid rgba(0,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius: "50%"
                }}
              >
                <img
                  height={passwordImageSize}
                  width={passwordImageSize}
                  src={passwordImg4}
                  alt=""
                  onClick={this.signupImageSelect}
                />
              </button>
            </Form.Group>

            <Form.Group style={{ display: "flex" }}>
              <button
                id="1"
                type="button"
                style={{
                  border: "2px solid yellow",
                  backgroundColor: "white",
                  borderRadius: "50%"
                }}
                onClick={this.signupImageChange}
              >
                <div
                  style={{
                    height: passwordImageSize,
                    width: passwordImageSize,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundImage: `url(${imageState[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                ></div>
              </button>

              <button
                type="button"
                id="2"
                style={{
                  border: "2px solid yellow",
                  backgroundColor: "white",
                  borderRadius: "50%"
                }}
                onClick={this.signupImageChange}
              >
                <div
                  style={{
                    height: passwordImageSize,
                    width: passwordImageSize,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundImage: `url(${imageState[1]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                ></div>
              </button>
              <button
                id="3"
                type="button"
                style={{
                  border: "2px solid yellow",
                  backgroundColor: "white",
                  borderRadius: "50%"
                }}
                onClick={this.signupImageChange}
              >
                <div
                  style={{
                    height: passwordImageSize,
                    width: passwordImageSize,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundImage: `url(${imageState[2]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                ></div>
              </button>
              <button
                id="4"
                type="button"
                style={{
                  border: "2px solid yellow",
                  backgroundColor: "white",
                  borderRadius: "50%"
                }}
                onClick={this.signupImageChange}
              >
                <div
                  style={{
                    height: passwordImageSize,
                    width: passwordImageSize,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundImage: `url(${imageState[3]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                ></div>
              </button>
            </Form.Group>
          </div>

          <Form.Group>
            <Form.Label style={{ color: "white" }} htmlFor="birthdate">
              Birthdate:{" "}
            </Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              id="birthDate"
              style={{ backgroundColor: "white" }}
              value={this.state.birthDate}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button
            style={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "20px",
              border: "2px solid white"
            }}
            type="submit"
          >
            Child Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default ChildSignup;

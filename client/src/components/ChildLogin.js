import React, { Component } from "react";
import { childLogin } from "./services/auth";
// import { Alert, Form, Button } from "react-bootstrap";

import Welcome from "./Welcome";
import CarouselProfileimages from "../components/Login_Children/CarouselLoginProfileImages";
import ChildrenPassword from "../components/Login_Children/ChildrenLoginPassword";
import "../../src/assets/stylesheet/components/ChildrenLogin/childrenLoginForm.scss";

class GameLogin extends Component {
  state = {
    password: "",
    profileImgUrl: "",
    chosenProfileImg: 0,
    passwordImages: [],
    changeImage: 0,
    chosenProfile: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    childLogin(
      this.state.chosenProfile.username,
      this.state.chosenProfile._id,
      this.state.password
    ).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        console.log(data);
        this.props.setUser(data);
        this.props.history.push("/play");
      }
    });
  };

  setPassword = password => {
    this.setState({ password: password });
  };
  setPasswordImage = passwordImages => {
    this.setState({ passwordImages: passwordImages });
  };
  setChangePassword = changeImage => {
    this.setState({ changeImage: changeImage });
  };
  setProfileImage = profileImage => {
    this.setState({ profileImgUrl: profileImage });
  };
  setChosenProfileImage = num => {
    this.setState({ chosenProfileImg: num });
  };
  setChosenProfile = profile => {
    this.setState({ chosenProfile: profile });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          style={{
            backgroundColor: "white",
            height: "600px",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "20px"
          }}
        >
          <CarouselProfileimages
            {...this.state}
            setProfileImg={this.setProfileImage}
            setChosenProfileImg={this.setChosenProfileImage}
            setChosenProfile={this.setChosenProfile}
          />
          <ChildrenPassword
            {...this.state}
            setPassword={this.setPassword}
            setPasswordImage={this.setPasswordImage}
            setChangePassword={this.setChangePassword}
          />
          {this.state.error && <p>{this.state.error}</p>}
          <button className="loginButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

class ChildLogin extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState(
      {
        user: user
      },
      () => {
        this.props.setUser(this.state.user);
      }
    );
  };

  render() {
    return (
      <Welcome>
        <GameLogin {...this.props} setUser={this.setUser} />
      </Welcome>
    );
  }
}

export default ChildLogin;

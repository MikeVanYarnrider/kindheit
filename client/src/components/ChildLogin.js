import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { childLogin } from "./services/auth";

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
        this.props.history.push("/");
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              backgroundColor: "rgba(255,255,255, 0.7)",
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
              Login
            </button>
          </div>
        </form>
      </div>
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
      <CSSTransition in appear classNames="app-fade" timeout={800}>
        <GameLogin {...this.props} setUser={this.setUser} />
      </CSSTransition>
    );
  }
}

export default ChildLogin;

import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { childLogin } from "./services/auth";
import {error, loginChildIcon} from "../images"

import CarouselProfileimages from "../components/Login_Children/CarouselLoginProfileImages";
import ChildrenPassword from "../components/Login_Children/ChildrenLoginPassword";
import "../../src/assets/stylesheet/components/ChildrenLogin/childrenLoginForm.scss";

const defaultProfiles = [
  {
    gameStatus: [],
    parent: ["111111111111111111111111"],
    password: "pppp",
    profileImgUrl:"",
    sessionTimes: [],
    type: "child",
    username: "Max",
    _id: "111111111111111111111111"
  },
  {
    gameStatus: [],
    parent: ["111111111111111111111111"],
    password: "ppppp",
    profileImgUrl:"",
    sessionTimes: [],
    type: "child",
    username: "Marie",
    _id: "111111111111111111111111"
  }
];

class GameLogin extends Component {
  state = {
    password: "",
    profileImgUrl: "",
    chosenProfileImg: 0,
    passwordImages: [],
    changeImage: 0,
    chosenProfile: defaultProfiles[0]
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
          <div className="childLoginFormWrapper"
          >
            <CarouselProfileimages
              {...this.state}
              setProfileImg={this.setProfileImage}
              setChosenProfileImg={this.setChosenProfileImage}
              setChosenProfile={this.setChosenProfile}
            />
            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", height: "50%"}}>
            <ChildrenPassword
              {...this.state}
              setPassword={this.setPassword}
              setPasswordImage={this.setPasswordImage}
              setChangePassword={this.setChangePassword}
            />
            {this.state.error && <div className="errorWrapper"><img src={error} style={{height: "20px", marginRight: "10px"}} alt=""/><p className="error">{this.state.error}</p></div>}
            <button className="loginButton" type="submit">
              <img src={loginChildIcon} style={{height: "30px"}} alt=""/>
            </button>
            </div>
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

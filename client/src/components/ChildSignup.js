import React, { Component } from "react";
import { signupChild } from "./services/auth";
import CarouselProfileimages from "../components/Signup_Children/CarouselProfileImages";
import ChildrenPassword from "../components/Signup_Children/ChildrenPassword";
import Button from "../../src/components/Button";
import "../assets/stylesheet/components/ChildrenSignup/signupForm.scss";

import { profileImg_boy_brownHair } from "../images";
import axios from "axios";

const profileImgArr = [profileImg_boy_brownHair];

const defaultProfiles = ["max"];

class ChildSignup extends Component {
  state = {
    childname: "",
    password: "",
    birthDate: "",
    page: 0,
    profileImgUrl: profileImgArr[0],
    chosenProfileImg: 0,
    parent: this.props.parentUser._id,
    passwordImages: [],
    changeImage: 0,
    allChildrenProfiles: defaultProfiles
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      nameDuplicat: false,
      nameEmpty: false,
      error: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let nameArr = this.state.childname.split("");
    let newName =
      nameArr
        .slice(0, 1)
        .join("")
        .toUpperCase() +
      nameArr
        .slice(1)
        .join("")
        .toLowerCase();

    signupChild(
      newName,
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

  componentDidMount() {
    axios
      .get("/api/auth/getProfiles")
      .then(response => {
        if (response.data.length !== 0) {
          let profiles = response.data;
          let profileNames = profiles.map(profile => {
            return profile.username.toUpperCase();
          });
          this.setState({ allChildrenProfiles: profileNames });
        }
      })
      .catch(err => {
        return err;
      });
  }

  setPassword = password => {
    this.setState({ password: password, error: "" });
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

  backwardClick = event => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  forwardClick = event => {
    if (!this.state.childname) {
      this.setState({
        nameEmpty: true
      });
      return;
    }

    if (
      this.state.allChildrenProfiles.includes(
        this.state.childname.toUpperCase()
      )
    ) {
      this.setState({
        nameDuplicat: true
      });
      return;
    } else {
      this.setState({
        nameDuplicat: false
      });
    }

    if (this.state.page === 2 && this.state.password.length < 4) {
      this.setState({
        error: "Das Passwort ist leider noch zu kurz!"
      });
      return;
    }

    if (this.state.page < 3) {
      this.setState({
        page: this.state.page + 1
      });
    }
  };

  render() {
    return (
      <div className="mainWrapper">
        <div className="header">
          <h1>SIGNUP YOUR CHILD</h1>
        </div>

        <div className="wrapperDiv">
          {this.state.page === 0 ? (
            <Button
              variant="btn-rnd transparent back"
              onClick={this.backwardClick}
            />
          ) : (
            <Button variant="btn-rnd back" onClick={this.backwardClick} />
          )}

          <form onSubmit={this.handleSubmit} className="form">
            {this.state.page === 0 && (
              <section>
                <label htmlFor="childname">Childname: </label>
                <input
                  type="text"
                  name="childname"
                  id="childname"
                  placeholder="Name"
                  value={this.state.childname}
                  onChange={this.handleChange}
                />
                {this.state.nameEmpty && <h2>Please chose a name!</h2>}
                {this.state.nameDuplicat && <h2>Name is already taken!</h2>}
              </section>
            )}

            {this.state.page === 1 && (
              <CarouselProfileimages
                {...this.state}
                setProfileImg={this.setProfileImage}
                setChosenProfileImg={this.setChosenProfileImage}
              />
            )}

            {this.state.page === 2 && (
              <>
                <ChildrenPassword
                  {...this.state}
                  setPassword={this.setPassword}
                  setPasswordImage={this.setPasswordImage}
                  setChangePassword={this.setChangePassword}
                />
                {this.state.error && <h2>{this.state.error}</h2>}
              </>
            )}
            {this.state.page === 3 && (
              <div className="signupPage">
                <div>
                  <label htmlFor="birthdate">Birthdate:</label>
                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    style={{ backgroundColor: "white" }}
                    value={this.state.birthDate}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                {this.state.error && <h2>{this.state.error}</h2>}
                <button className="submitButton" type="submit">
                  Child Sign Up
                </button>
              </div>
            )}
          </form>
          {this.state.page >= 3 ? (
            <Button
              variant="btn-rnd transparent forward"
              onClick={this.forwardClick}
            />
          ) : (
            <Button variant="btn-rnd forward" onClick={this.forwardClick} />
          )}
        </div>
      </div>
    );
  }
}

export default ChildSignup;

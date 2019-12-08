import React, { Component } from "react";
import { signupChild } from "./services/auth";
import { Alert, Form /* Button  */ } from "react-bootstrap";
import CarouselProfileimages from "../components/Signup_Children/CarouselProfileImages";
import ChildrenPassword from "../components/Signup_Children/ChildrenPassword";
import Button from "../../src/components/Button";
import "../assets/stylesheet/components/ChildrenSignup/signupForm.scss";

import {  profileImg_boy_brownHair } from "../images";

const profileImgArr = [ profileImg_boy_brownHair];

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

  backwardClick = event => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  forwardClick = event => {
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

          <Form onSubmit={this.handleSubmit} className="form">
            {this.state.page === 0 && (
              <Form.Group>
                <Form.Label htmlFor="childname">Childname: </Form.Label>
                <Form.Control
                  type="text"
                  name="childname"
                  id="childname"
                  placeholder="Name"
                  value={this.state.childname}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {this.state.page === 1 && (
              <CarouselProfileimages
                {...this.state}
                setProfileImg={this.setProfileImage}
                setChosenProfileImg={this.setChosenProfileImage}
              />
            )}

            {this.state.page === 2 && (
              <ChildrenPassword
                {...this.state}
                setPassword={this.setPassword}
                setPasswordImage={this.setPasswordImage}
                setChangePassword={this.setChangePassword}
              />
            )}
            {this.state.page === 3 && (
              <div className="signupPage">
                <Form.Group>
                  <Form.Label htmlFor="birthdate">Birthdate:</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    style={{ backgroundColor: "white" }}
                    value={this.state.birthDate}
                    onChange={this.handleChange}
                  />
                </Form.Group>{" "}
                {this.state.error && (
                  <Alert variant="danger">{this.state.error}</Alert>
                )}
                <button className="submitButton" type="submit">
                  Child Sign Up
                </button>
              </div>
            )}
          </Form>
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

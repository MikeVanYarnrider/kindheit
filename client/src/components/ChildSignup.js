import React, { Component } from "react";
import { signupChild } from "./services/auth";
import { Alert, Form, Button } from "react-bootstrap";

import {
  passwordImg1,
  passwordImg2,
  passwordImg3,
  passwordImg4
} from "../images";

class ChildSignup extends Component {
  state = {
    childname: "",
    password: "",
    birthDate: "",
    profileImgUrl: "",
    parent: this.props.parentUser._id,
    passwordImages: [],
    changeImage: 0
  };

  handleChange = event => {
    console.log(event.target.value);
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
    console.log(url);
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
    let selectNum = imageState.map(el => el.match(/(\d)./)["1"]);

    this.setState({
      passwordImages: this.state.passwordImages,
      password: selectNum.join(""),
      changeImage: 0
    });
  };

  signupImageChange = event => {
    let changeImageNum = event.currentTarget.id;
    this.setState({ #changeImage: changeImageNum });
  };

  render() {
    let imageState = this.state.passwordImages;
    return (
      <div>
        <h2>Child Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="childname">Childname: </Form.Label>
            <Form.Control
              type="text"
              name="childname"
              id="childname"
              value={this.state.childname}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <button
              type="button"
              style={{
                border: "2px solid blue",
                backgroundColor: "white",
                borderRadius: "50%"
              }}
            >
              <img
                height="100px"
                width="100px"
                src={passwordImg1}
                alt=""
                onClick={this.signupImageSelect}
              />
            </button>
            <button
              type="button"
              style={{
                border: "2px solid blue",
                backgroundColor: "white",
                borderRadius: "50%"
              }}
            >
              <img
                height="100px"
                width="100px"
                src={passwordImg2}
                alt=""
                onClick={this.signupImageSelect}
              />
            </button>
            <button
              type="button"
              style={{
                border: "2px solid blue",
                backgroundColor: "white",
                borderRadius: "50%"
              }}
            >
              <img
                height="100px"
                width="100px"
                src={passwordImg3}
                alt=""
                onClick={this.signupImageSelect}
              />
            </button>
            <button
              type="button"
              style={{
                border: "2px solid blue",
                backgroundColor: "white",
                borderRadius: "50%"
              }}
            >
              <img
                height="100px"
                width="100px"
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
                  height: "100px",
                  width: "100px",
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
                  height: "100px",
                  width: "100px",
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
                  height: "100px",
                  width: "100px",
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
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  backgroundImage: `url(${imageState[3]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </button>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="birthdate">Birthdate: </Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              id="birthDate"
              value={this.state.birthDate}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button type="submit">Child Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default ChildSignup;

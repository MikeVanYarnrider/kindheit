import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../../form/Form";
import { parentLogin } from "../../services/auth";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    parentLogin(this.state.username, this.state.password).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const fields = [
      {
        label: "Username:",
        name: "username",
        type: "text",
        value: this.state.username
      },
      {
        label: "Password:",
        name: "password",
        type: "password",
        value: this.state.password
      }
    ];

    return (
      <>
        <h2>ParentLogin</h2>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          fields={fields}
          error={this.state.error}
        />
        <p>
          Don't have an account yet?
          <Link className="navbar-link" to="/signup">
            Signup
          </Link>
        </p>
      </>
    );
  }
}

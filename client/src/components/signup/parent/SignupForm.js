import React, { Component } from "react";
import { signup } from "../../services/auth";
import Form from "../../form/Form";

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    signup(this.state.username, this.state.password, this.state.email).then(
      data => {
        if (data.message) {
          this.setState({
            error: data.message
          });
        } else {
          this.props.setUser(data);
          this.props.history.push("/parent");
        }
      }
    );
  };

  render() {
    const fields = [
      {
        label: "Nutzername:",
        name: "username",
        type: "text",
        value: this.state.username
      },
      {
        label: "Passwort:",
        name: "password",
        type: "password",
        value: this.state.password
      },
      {
        label: "Email:",
        name: "email",
        type: "email",
        value: this.state.email
      }
    ];

    return (
      <div>
        <h1 style={{ color: "white", margin: "0 0 20px 20px" }}>Anmelden</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          fields={fields}
          error={this.state.error}
          button="Anmeldung"
        />
      </div>
    );
  }
}

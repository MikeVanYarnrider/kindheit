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
        this.props.history.push("/parent");
      }
    });
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
      }
    ];

    return (
      <div>
        <h1 style={{margin: "0 0 20px 20px", color: "white"}}>Eltern Login</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          fields={fields}
          error={this.state.error}
          button="Login"
        />
        <p style={{marginLeft: "20px"}}>
          Sie haben noch kein Konto?
          <Link className="navbar-link" to="/signup" >
            Anmelden
          </Link>
        </p>
      </div>
    );
  }
}

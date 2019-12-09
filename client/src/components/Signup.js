import React, { Component } from "react";
import { signup } from "./services/auth";
import { Alert, Form, Button } from "react-bootstrap";

class Signup extends Component {
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
          console.log(data);
          this.props.setUser(data);
          this.props.history.push("/parent");
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          {this.state.error && <h2 variant="danger">{this.state.error}</h2>}
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default Signup;

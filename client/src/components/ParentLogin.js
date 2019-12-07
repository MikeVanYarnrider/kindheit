import React, { Component } from "react";
import { parentLogin } from "./services/auth";
import { Alert, Form, Button } from "react-bootstrap";

class ParentLogin extends Component {
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
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/parent");
      }
    });
  };

  render() {
    return (
      <div>
        <h2>ParentLogin</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button type="submit">Parent Login</Button>
        </Form>
      </div>
    );
  }
}

export default ParentLogin;

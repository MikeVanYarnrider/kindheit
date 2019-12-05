import React, { Component } from "react";

import Welcome from "./Welcome";

const GameLogin = () => {
  return <div>Здесь будет логин :)</div>;
};

export default class Login extends Component {
  render() {
    return <Welcome content={<GameLogin />} />;
  }
}

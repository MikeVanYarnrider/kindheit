import React, { Component } from "react";

import Welcome from "./Welcome";

const GameLogin = () => {
  return <div>Здесь будет логин :)</div>;
};

export default class ChildLogin extends Component {
  render() {
    return (
      <Welcome>
        <GameLogin />
      </Welcome>
    );
  }
}



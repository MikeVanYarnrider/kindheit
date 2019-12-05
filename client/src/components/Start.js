import React from "react";
import { Link } from "react-router-dom";

import Welcome from "./Welcome";

import "../assets/stylesheet/components/start.scss";

const GameStart = () => {
  return (
    <div className="start">
      <h1>Hello Kid!</h1>
      <Link to="/play">Let's play</Link>
    </div>
  );
};

const Start = () => {
  return <Welcome content={<GameStart />} />;
};

export default Start;

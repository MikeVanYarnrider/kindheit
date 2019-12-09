import React from "react";
import { train } from "../../../images";
import "./../../../assets/stylesheet/components/instruction.scss";

const Instructions = () => {
  return (
    <div className="equipment flex">
      <div className="container">
        <img src={train} width="200px" alt="train" />
      </div>

      <div className="container">
        <p>Baue einen Lego Zug</p>
      </div>
      <div className="container">
        <img src={train} width="200px" alt="train" />
      </div>
    </div>
  );
};

export default Instructions;

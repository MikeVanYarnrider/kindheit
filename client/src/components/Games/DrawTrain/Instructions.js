import React from "react";
import { TrainImg } from "../../../images";
import "./../../../assets/stylesheet/components/instruction.scss";

const Instructions = props => {
  return <img src={TrainImg} alt={props.title} />;
};

export default Instructions;

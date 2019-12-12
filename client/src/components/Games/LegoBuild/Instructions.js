import React from "react";
import "./../../../assets/stylesheet/components/instruction.scss";

import { LegoImg } from "../../../images";

const Instructions = props => {
  return <img src={LegoImg} alt={props.title} />;
};

export default Instructions;

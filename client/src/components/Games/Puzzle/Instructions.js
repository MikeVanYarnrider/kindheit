import React from "react";

import { PuzzleImg } from "../../../images";

const Instructions = props => {
  return <img src={PuzzleImg} alt={props.title} />;
};

export default Instructions;

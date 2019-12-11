import React from "react";

import { MemoryImg } from "../../../images";

const Instructions = props => {
  return <img src={MemoryImg} alt={props.title} />;
};

export default Instructions;

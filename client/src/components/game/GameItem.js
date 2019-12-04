import React from "react";
import { Link } from "react-router-dom";

const GameItem = props => {
  return (
    <div className={props.class}>
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
};

export default GameItem;

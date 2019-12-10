import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheet/components/button.scss";

import { Back, Plus, Play, Close, Overview, Check } from "./buttons/SpriteButtons";

const Button = props => {
  const { onClick, href } = props;

  const variant = () => {
    if (props.variant.includes("back")) {
      return <Back />;
    }
    if (props.variant.includes("forward")) {
      return <Back classSvg="forward" />;
    }
    if (props.variant.includes("play")) {
      return <Play />;
    }
    if (props.variant.includes("close")) {
      return <Close />;
    }
    if (props.variant.includes("overview")) {
      return <Overview classSvg="empty" />;
    }
    if (props.variant.includes("number")) {
      return <span>1</span>;
    }
    if (props.variant.includes("select")) {
      return <Plus />;
    }
    if (props.variant.includes("checked")) {
      return <Check classSvg="checked" />;
    } else {
      return (
        <>
          {props.children} <Play />
        </>
      );
    }
  };

  const button = href ? (
    <Link to={href} className={`btn ${props.variant}`}>
      {variant()}
    </Link>
  ) : (
    <button className={`btn ${props.variant}`} onClick={onClick}>
      {variant()}
    </button>
  );

  return button;
};

export default Button;

import React from "react";
import "../assets/stylesheet/components/Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faLongArrowAltLeft,
  faPlus,
  faCheck,
  faDice
} from "@fortawesome/free-solid-svg-icons";

const Button = props => {
  // console.log(props);

  const variant = () => {
    if (props.variant.includes("back")) {
      return <FontAwesomeIcon icon={faLongArrowAltLeft} />;
    }
    if (props.variant.includes("play")) {
      return <FontAwesomeIcon icon={faPlay} />;
    }
    if (props.variant.includes("overview")) {
      return <FontAwesomeIcon icon={faDice} />;
    }
    if (props.variant.includes("number")) {
      return <span>1</span>;
    }
    if (props.variant.includes("select")) {
      return <FontAwesomeIcon icon={faPlus} />;
    }
    if (props.variant.includes("checked")) {
      return <FontAwesomeIcon icon={faCheck} />;
    } else {
      return (
        <>
          {props.children} <FontAwesomeIcon icon={faPlay} />
        </>
      );
    }
  };

  return <button className={props.variant}>{variant()}</button>;
};

export default Button;

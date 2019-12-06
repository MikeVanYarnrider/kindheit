import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheet/components/button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faPlus,
  faCheck,
  faDice,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const Button = props => {
  const { onClick, href } = props;

  const variant = () => {
    if (props.variant.includes("back")) {
      return <FontAwesomeIcon icon={faLongArrowAltLeft} />;
    }
    if (props.variant.includes("forward")) {
      return <FontAwesomeIcon icon={faLongArrowAltRight} />;
    }
    if (props.variant.includes("play")) {
      return <FontAwesomeIcon icon={faPlay} />;
    }
    if (props.variant.includes("close")) {
      return <FontAwesomeIcon icon={faTimes} />;
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

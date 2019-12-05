import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheet/components/Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faPlus,
  faCheck,
  faDice
} from "@fortawesome/free-solid-svg-icons";

const Button = props => {
  console.log(props);
  const { onClick, href } = props;
  // console.log(onClick);

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
    <Link to={href}>
      <span role="button" className={props.variant} onClick={onClick}>
        {variant()}
      </span>
    </Link>
  ) : (
    <span role="button" className={props.variant} onClick={onClick}>
      {variant()}
    </span>
  );

  return button;
};

export default Button;

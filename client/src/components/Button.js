import React from "react";

const Button = props => {
  // console.log(props);

  const variant = () => {
    if (props.variant.includes("back")) {
      return <span>Back</span>;
    }
    if (props.variant.includes("play")) {
      return <span>Play</span>;
    }
    if (props.variant.includes("overview")) {
      return <span>Overview</span>;
    }
    if (props.variant.includes("number")) {
      return <span>1</span>;
    }
    if (props.variant.includes("select")) {
      return <span>Select</span>;
    }
    if (props.variant.includes("checked")) {
      return <span>Checked</span>;
    }
  };

  return (
    <div>
      <button className={props.variant}>{variant()}</button>
    </div>
  );
};

export default Button;

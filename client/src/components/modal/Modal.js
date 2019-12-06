import React from "react";
import Button from "../Button";

import "../../assets/stylesheet/components/modal.scss";

export const Modal = props => {
  const handleClick = () => {
    props.onBtnClick();
  };

  return (
    <div
      className={`container-flex modal ${props.show ? "open" : ""}`.trimRight()}
    >
      <div className="modal-inner">
        {props.children}
        <Button onClick={() => handleClick()} variant={props.variant}>
          {props.btnAction}
        </Button>
      </div>
    </div>
  );
};

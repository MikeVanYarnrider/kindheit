import React from "react";
import Button from "../Button";

import "../../assets/stylesheet/components/modal.scss";

class Modal extends React.Component {
  state = { fadeType: null };

  componentDidMount() {
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  transitionEnd = event => {
    if (event.propertyName !== "opacity" || this.state.fadeType === "in")
      return;

    if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };

  modalClose = () => {
    this.setState({ fadeType: "out" });
  };

  handleClick = () => {
    this.props.onBtnClick();
  };

  render() {
    return (
      <div
        className={`container-flex modal fade-${this.state.fadeType}`}
        onTransitionEnd={this.transitionEnd}
      >
        <div
          className={`modal-inner${
            this.props.classCustom ? `-${this.props.classCustom}` : ""
          }`.trimRight()}
        >
          {this.props.children}
          {this.props.onBtnClick && (
            <Button
              onClick={() => this.handleClick()}
              variant={this.props.variant}
            >
              {this.props.btnAction}
            </Button>
          )}
          {this.props.path && (
            <Button href={this.props.path} variant={this.props.variant}>
              {this.props.btnAction}
            </Button>
          )}
          {this.props.onClose && (
            <Button onClick={this.modalClose} variant="btn-rnd close"></Button>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;

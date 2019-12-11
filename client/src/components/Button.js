import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../assets/stylesheet/components/button.scss";

import {
  Back,
  Plus,
  Play,
  Close,
  Overview,
  Check
} from "./buttons/SpriteButtons";

class Button extends Component {
  state = {
    redirect: "",
    fade: false
  };

  generateContent = variant => {
    if (variant.includes("back")) return <Back />;
    if (variant.includes("forward")) return <Back classSvg="forward" />;
    if (variant.includes("play")) return <Play />;
    if (variant.includes("close")) return <Close />;
    if (variant.includes("overview")) return <Overview classSvg="empty" />;
    if (variant.includes("number")) return <span>1</span>;
    if (variant.includes("select")) return <Plus />;
    if (variant.includes("checked")) return <Check classSvg="checked" />;
    if (variant.includes("image")) return <>{this.props.children}</>;
    else
      return (
        <>
          {this.props.children} <Play />
        </>
      );
  };

  startAnimation = () => {
    this.props.animationImg && this.props.handleAnimationImg(true);
    this.setState({
      fade: true
    });
  };

  finishAnimation = (event, cb) => {
    this.props.animationImg && this.props.handleAnimationImg(false);
    this.setState(
      {
        fade: false
      },
      () => {
        cb();
      }
    );
  };

  handleRedirect = () => {
    this.props.animationImg && this.props.handleAnimationImg(false);
    this.setState({
      fade: false,
      redirect: this.props.href
    });
  };

  render() {
    const { onClick, href, variant } = this.props;
    const btnClass = `btn ${variant} ${
      this.state.fade ? this.props.animation : ""
    }`.trimRight();
    const checkLink = href ? this.handleRedirect : onClick;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <>
        <button
          className={btnClass}
          onClick={event =>
            this.props.animation
              ? this.startAnimation()
              : this.finishAnimation(event, checkLink)
          }
          onAnimationEnd={event => this.finishAnimation(event, checkLink)}
        >
          {this.generateContent(variant)}
        </button>
      </>
    );
  }
}

export default Button;

import React, { Component } from "react";
import Modal from "../modal/Modal";
import Button from "../Button";

class GameItem extends Component {
  state = {
    instructions: false,
    animation: false
  };

  handleInstructions = () => {
    this.setState({
      instructions: !this.state.instructions
    });
  };

  render() {
    const { classProp, title, instructions, link, url } = this.props;
    const Instructions = instructions;
    return (
      <>
        {instructions ? (
          <>
            <div className={classProp}>
              <img
                src={url}
                alt={title}
                className={this.state.animation ? "scale" : ""}
              />
              <Button
                onClick={() => {
                  this.handleInstructions();
                }}
                variant="btn-rnd select"
                animation="scale"
                animationImg={true}
                handleAnimationImg={bool => this.setState({ animation: bool })}
              ></Button>
            </div>
            {this.state.instructions && (
              <Modal
                path={link}
                variant="btn-rnd play"
                isOpen={this.state.instructions}
                onClose={this.handleInstructions}
                classCustom="instructions"
              >
                <Instructions title={title} />
              </Modal>
            )}
          </>
        ) : (
          <div className={classProp}>
            <Button href={link} variant="image" animation="scale">
              <img src={url} alt={title} />
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default GameItem;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Button from "../Button";

class GameItem extends Component {
  state = {
    instructions: false
  };

  handleInstructions = () => {
    console.log("TRIGGER MODAL", this.state.instructions);
    this.setState({
      instructions: !this.state.instructions
    });
  };

  render() {
    const { classProp, title, instructions, link } = this.props;
    return (
      <div className={classProp}>
        {instructions ? (
          <>
            <h1>{title}</h1>
            <Button
              onClick={() => this.handleInstructions()}
              variant="btn-rnd select"
            ></Button>
            {this.state.instructions && (
              <Modal
                path={link}
                variant="btn-rnd btn-start"
                isOpen={this.state.instructions}
                onClose={this.handleInstructions}
              classCustom="instructions"
              >
                <h1>Instructions</h1>
                {instructions}
              </Modal>
            )}
          </>
        ) : (
          <Link to={link}>{title}</Link>
        )}
      </div>
    );
  }
}

export default GameItem;

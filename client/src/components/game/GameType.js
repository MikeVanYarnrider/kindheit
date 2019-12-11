import React from "react";
import { CSSTransition } from "react-transition-group";
import GameItem from "./GameItem";

import "../../assets/stylesheet/components/game.scss";

import { types } from "../../data/types";

const GameSelect = () => {
  const list = types.map((game, index) => {
    return (
      <GameItem
        key={index}
        classProp={"game-type"}
        title={game.type}
        url={game.image}
        link={`/play/${game.link}`}
      />
    );
  });

  return <div>{list}</div>;
};

const GameType = () => {
  return (
    <CSSTransition
      in
      appear
      classNames="container-game-type app-fade"
      timeout={800}
    >
      <GameSelect />
    </CSSTransition>
  );
};

export default GameType;

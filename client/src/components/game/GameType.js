import React from "react";

import Welcome from "../Welcome";
import GameItem from "./GameItem";

import "../../assets/stylesheet/components/game.scss";

import { types } from "../../data/types";

const GameSelect = () => {
  const list = types.map((game, index) => {
    return (
      <GameItem
        key={index}
        class={"game-type"}
        title={game.type}
        link={`/play/${game.link}`}
      />
    );
  });

  return <div className="game">{list}</div>;
};

const GameType = () => {
  return (
    <Welcome>
      <GameSelect />
    </Welcome>
  );
};

export default GameType;

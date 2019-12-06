import React from "react";

import GameItem from "./GameItem";
import Button from "../Button";

import "../../assets/stylesheet/components/game.scss";

import games from "../../data/games";

const GameList = props => {
  const { type } = props.match.params;

  const list = games
    .filter(game => game.type === type)
    .map((game, index) => {
      return (
        <GameItem
          key={index}
          class={"game-item"}
          title={game.title}
          link={`/play/${type}/${game.link}`}
        />
      );
    });

  return (
    <div className="container-flex container-indent container-ratio">
      <Button variant="btn-rnd back btn-ratio top left" href="/play" />
      <div className="game-list">{list}</div>
    </div>
  );
};

export default GameList;

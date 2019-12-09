import React from "react";
import { CSSTransition } from "react-transition-group";

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
          classProp={"game-item"}
          instructions={game.instructions}
          title={game.title}
          link={`/play/${type}/${game.link}`}
        />
      );
    });

  return (
    <CSSTransition in appear classNames="app-fade" timeout={800}>
      <div className="container-flex container-indent container-ratio">
        <Button variant="btn-rnd back btn-ratio top left" href="/" />
        <div className="game-list">{list}</div>
      </div>
    </CSSTransition>
  );
};

export default GameList;

// eslint-disable-next-line
import React from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../Button";

import games from "../../data/games";

function Game(props) {
  console.log("GAME.JS", props);
  const { gameId, type } = props.match.params;
  const game = games.find(game => game.link === gameId);

  const Component = game.component;
  return (
    <CSSTransition in appear classNames="app-fade" timeout={800}>
      <div className="container-ratio">
        <Button
          variant="btn-rnd close btn-ratio top right"
          href={`/play/${type}`}
          animation="scale"
        />
        <Component {...props} getRestrictionTime={props.getRestrictionTime} />
      </div>
    </CSSTransition>
  );
}

export default Game;

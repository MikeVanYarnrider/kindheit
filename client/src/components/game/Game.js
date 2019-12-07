// eslint-disable-next-line
import React from "react";
import Button from "../Button";

import games from "../../data/games";

function Game(props) {
  const { gameId, type } = props.match.params;
  const game = games.find(game => game.link === gameId);

  const Component = game.component;
  return (
    <div className="container-ratio">
      <Button
        variant="btn-rnd close btn-ratio top right"
        href={`/play/${type}`}
      />
      <Component {...props} />
    </div>
  );
}

export default Game;

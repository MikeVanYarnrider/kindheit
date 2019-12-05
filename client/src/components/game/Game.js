// eslint-disable-next-line
import React, { Component } from "react";

import games from "../../data/games";

function Game(props) {
  const { gameId } = props.match.params;
  const game = games.find(game => game.link === gameId);

  return game.component;
}

export default Game;

import React, { Component } from "react";
import Puzzle from "../Games/Puzzle/Puzzle";

//import { games } from "../../data/games";

export default class Game extends Component {
  render() {
    //const { gameId } = this.props.match.params;
    //const game = games.find(game => game.link === gameId);

    return <Puzzle />;
  }
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/game/Game";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import GameStart from "./components/Start";
import GameType from "./components/game/GameType";
import GameList from "./components/game/GameList";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={GameStart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/play" component={GameType} />
        <Route exact path="/play/:type" component={GameList} />
        <Route exact path="/play/:type/:gameId" component={Game} />
      </Switch>
    </div>
  );
}

export default App;

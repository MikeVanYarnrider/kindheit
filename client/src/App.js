import React from "react";
import { Route, Switch } from "react-router-dom";
import Puzzle from "./components/Games/Puzzle/Puzzle";
import Navbar from "./components/Navbar";
// import Button from "./components/Button";
import Login from "./components/Login";
import GameStart from "./components/Start";
import GameType from "./components/game/GameType";
import GameList from "./components/game/GameList";
import Slider from "./components/Slider";

function App(props) {
  console.log("app", props);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={GameStart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/play" component={GameType} />
        <Route exact path="/play/:type" component={GameList} />
        <Route exact path="/play/device/puzzle" component={Puzzle} />
        <Route
          exact
          path="/play/handgames/foldtrain"
          render={props => <Slider {...props} />}
        />
      </Switch>
      <Slider />
    </div>
  );
}

export default App;

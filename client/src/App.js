import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/game/Game";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import ParentLogin from "./components/ParentLogin";
import Login from "./components/Login";
import GameStart from "./components/Start";
import GameType from "./components/game/GameType";
import GameList from "./components/game/GameList";


class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} clearUser={this.setUser} />
        <Switch>
        <Route exact path="/" component={GameStart} />
        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/parentlogin"
          render={props => <ParentLogin {...props} setUser={this.setUser} />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/play" component={GameType} />
        <Route exact path="/play/:type" component={GameList} />
        <Route exact path="/play/:type/:gameId" component={Game} />
      </Switch>
      </div>
    );
  }
}

export default App;

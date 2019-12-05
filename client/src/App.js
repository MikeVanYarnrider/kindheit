import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/game/Game";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import ParentLogin from "./components/ParentLogin";
import ChildSignup from "./components/ChildSignup";
import ChildLogin from "./components/ChildLogin";
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
    console.log("user", this.state.user)
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
      <Route
          exact
          path="/childsignup"
          render={props => <ChildSignup {...props} parentUser={this.state.user} setUser={this.setUser} />}
        />
        <Route exact path="/childlogin" component={ChildLogin} />
        <Route exact path="/play" component={GameType} />
        <Route exact path="/play/:type" component={GameList} />
        <Route exact path="/play/:type/:gameId" component={Game} />
      </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/signup/parent/ParentSignup";
import ParentLogin from "./components/login/parent/ParentLogin";
import ChildSignup from "./components/ChildSignup";
import ChildLogin from "./components/ChildLogin";
import Game from "./components/game/Game";
import GameType from "./components/game/GameType";
import GameList from "./components/game/GameList";
import Welcome from "./components/Welcome";

import ParentsBackend from "./components/ParentsBackend";

export default class App extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    // console.log("setUser");
    this.setState({
      user: user
    });
  };

  getRestrictionTime = restrictionTime => {
    console.log("restrictionTime", restrictionTime);
  };

  render() {
    // console.log(this.state.user);
    return (
      <div>
        <Navbar
          {...this.props}
          user={this.state.user}
          clearUser={this.setUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.state.user ? (
                <Welcome>
                  <GameType {...props} user={this.state.user} />
                </Welcome>
              ) : (
                <Welcome>
                  <ChildLogin {...props} setUser={this.setUser} />
                </Welcome>
              )
            }
          />

          <Route
            exact
            path="/signup"
            render={props => (
              <Welcome>
                <Signup {...props} setUser={this.setUser} />
              </Welcome>
            )}
          />
          <Route
            exact
            path="/parentlogin"
            render={props => (
              <Welcome>
                <ParentLogin {...props} setUser={this.setUser} />
              </Welcome>
            )}
          />
          <Route
            exact
            path="/childsignup"
            render={props => (
              <ChildSignup
                {...props}
                parentUser={this.state.user}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/parent"
            render={props => (
              <ParentsBackend
                {...props}
                parentUser={this.state.user}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/childlogin"
            render={props => (
              <Welcome>
                <ChildLogin {...props} setUser={this.setUser} />
              </Welcome>
            )}
          />
          <Route exact path="/play/:type" component={GameList} />
          <Route
            exact
            path="/play/:type/:gameId"
            render={props => (
              <Game
                {...props}
                getRestrictionTime={this.getRestrictionTime}
                user={this.state.user}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

import React from "react";
import Puzzle from "./components/Games/Puzzle/Puzzle";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import ParentLogin from "./components/ParentLogin";


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
        {/*           <Puzzle /> */}

        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
            <Route
          exact
          path="/parentlogin"
          render={props => <ParentLogin {...props} setUser={this.setUser} />}
        />
      </div>
    );
  }
}

export default App;

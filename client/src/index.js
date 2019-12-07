import React from "react";
import ReactDOM from "react-dom";
/* import "bootstrap/dist/css/bootstrap.css";  */
import "./assets/stylesheet/index.scss";
import App from "./App";
import { BrowserRouter, withRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.get("/api/auth/loggedin").then(response => {
  const user = response.data;

  const Content = withRouter(props => <App user={user} {...props} />);
  ReactDOM.render(
    <BrowserRouter>
      <Content />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

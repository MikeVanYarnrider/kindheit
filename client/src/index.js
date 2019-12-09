import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheet/index.scss";
import "./assets/stylesheet/components/app.scss";
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

serviceWorker.unregister();

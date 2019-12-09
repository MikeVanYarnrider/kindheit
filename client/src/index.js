import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheet/index.scss";
import "./assets/stylesheet/components/app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.get("/api/auth/loggedin").then(response => {
  const user = response.data;
  ReactDOM.render(
    
    <BrowserRouter>
      <App user={user} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();

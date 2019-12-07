import React from "react";
import { CSSTransition } from "react-transition-group";

import "../assets/stylesheet/components/welcome.scss";
import "../assets/stylesheet/components/app.scss";

const Welcome = props => {
  const content = props.children;
  return (
    <div className="container-flex welcome">
 {/*      <div style={{ backgroundColor: "white", width: "35%", height: "400px" }}>
        BACKGROUNDIMAGE
      </div> */}
      <CSSTransition in appear classNames="app-fade" timeout={800}>
        <div className="welcome-box">{content}</div>
      </CSSTransition>
    </div>
  );
};

export default Welcome;

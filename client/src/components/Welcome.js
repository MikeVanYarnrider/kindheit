import React from "react";

import "../assets/stylesheet/components/welcome.scss";

const Welcome = props => {
  const { content } = props;
  return (
    <div className="container-flex welcome">
      <div className="welcome-box">{content}</div>
    </div>
  );
};

export default Welcome;

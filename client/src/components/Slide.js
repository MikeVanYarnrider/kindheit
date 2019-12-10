import React from "react";
import "../assets/stylesheet/components/slide.scss";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
    borderRadius: "1em"
  };
  return <div className="slide" style={styles}></div>;
};

export default Slide;

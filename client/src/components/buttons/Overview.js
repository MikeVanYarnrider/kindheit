import React from "react";

const Overview = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 73 73" className={props.classSvg}>
      <circle cx="16.5" cy="16.5" r="13" strokeWidth="7"/>
      <circle cx="56.5" cy="16.5" r="13" strokeWidth="7"/>
      <circle cx="56.5" cy="56.5" r="13" strokeWidth="7"/>
      <circle cx="16.5" cy="56.5" r="13" strokeWidth="7"/>
      </svg>
  );
};

export default Overview;
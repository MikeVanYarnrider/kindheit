import React from "react";

const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 74 74"
    >
      <rect x="30" width="14" height="74" rx="2" />
      <rect
        x="74"
        y="30"
        width="14"
        height="74"
        rx="2"
        transform="rotate(90 74 30)"
      />
    </svg>
  );
};

export default Plus;

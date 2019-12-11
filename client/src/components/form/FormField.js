import React from "react";
import "../../assets/stylesheet/components/loginstyle.scss"

export const FormField = props => {
  const { label, name, type, value, onChange } = props;

  return (
    <div style={{display: "flex", flexDirection: "column", width: "300px"}}>
      <label style={{color: "white", marginLeft: "20px"}} htmlFor={name}>{label}</label>
      <input
      className="inputField"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

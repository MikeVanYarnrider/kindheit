import React from "react";

export const FormField = props => {
  const { label, name, type, value, onChange } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

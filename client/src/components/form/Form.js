import React from "react";
import { FormField } from "./FormField";

const FormGroup = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.fields.map(item => {
        return (
          <FormField
            key={item.name}
            type={item.type}
            label={item.label}
            name={item.name}
            value={item.value}
            onChange={props.handleChange}
          />
        );
      })}
      {props.error && <p>{props.error}</p>}
      <button type="submit">{props.button}</button>
    </form>
  );
};

export default FormGroup;

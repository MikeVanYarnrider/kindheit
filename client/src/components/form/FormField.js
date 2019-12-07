import React from "react";
import { Form } from "react-bootstrap";

export const FormField = props => {
  const { label, name, type, value, onChange } = props;
  console.log(props);
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

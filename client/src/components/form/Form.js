import React from "react";
import { FormField } from "./FormField";

import { Alert, Form, Button } from "react-bootstrap";

const FormGroup = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
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
      {props.error && <Alert variant="danger">{props.error}</Alert>}
      <Button type="submit">Parent Login</Button>
    </Form>
  );
};

export default FormGroup;

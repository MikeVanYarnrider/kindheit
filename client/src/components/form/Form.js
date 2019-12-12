import React from "react";
import { FormField } from "./FormField";
import { error } from "../../images";

const FormGroup = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      style={{
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {props.fields.map((item, index) => {
            return (
              <div key={index} style={{ height: "90px" }}>
                <FormField
                  key={item.name}
                  type={item.type}
                  label={item.label}
                  name={item.name}
                  value={item.value}
                  onChange={props.handleChange}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        {" "}
        {props.error && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "7px",
              marginTop: "35px"
            }}
          >
            <div
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 20px 0px 20px",
                margin: "0",
                borderRadius: "7px"
              }}
            >
              <img
                src={error}
                style={{ height: "20px", marginRight: "10px" }}
                alt="Fehler"
              />
              <p
                style={{
                  marginLeft: "20px"
                }}
              >
                {props.error}
              </p>
            </div>
          </div>
        )}
        <button
          type="submit"
          style={{
            marginTop: "30px",
            padding: "10px 15px 10px 15px",
            width: "300px",
            borderRadius: "30px",
            outline: "none",
            fontSize: "1.7em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "transparent",
            border: "3px solid white"
          }}
        >
          {props.button}
        </button>
      </div>
    </form>
  );
};

export default FormGroup;

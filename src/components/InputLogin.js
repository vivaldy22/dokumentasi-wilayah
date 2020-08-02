import React from "react";
import { TextField } from "@material-ui/core";

const InputLogin = ({
  onTextChange,
  onKeyPress,
  placeholder,
  type,
  name,
  valid,
  value,
}) => {
  return (
    <div className="input-text">
      <TextField
        required
        error={!valid}
        id={valid ? "outlined-required" : "outlined-error-helper-text"}
        helperText={
          valid
            ? ""
            : name === "email"
            ? "Invalid email or username"
            : "Password empty"
        }
        variant="outlined"
        label={placeholder}
        onChange={onTextChange}
        onKeyPress={onKeyPress}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        size="small"
        style={{ width: "350px" }}
      />
    </div>
  );
};

export default InputLogin;

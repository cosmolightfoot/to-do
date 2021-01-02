import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldRHF = ({
  inputRef,
  name,
  placeholder,
  label,
  errors,
  helperText,
  ...extraProps
}) => {
  return (
    <TextField
      inputRef={inputRef}
      name={name}
      placeholder={placeholder}
      label={label}
      error={!!errors?.[name]}
      helperText={!!errors?.[name] && errors[name]?.message}
      {...extraProps}
    />
  );
};

export default TextFieldRHF;

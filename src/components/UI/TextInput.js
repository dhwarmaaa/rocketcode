import React from "react";
import { Input } from "../../styles/TextInputStyle";

const TextInput = ({ placeholder, value, onChange, onBlur, name }) => {
  return (
    <Input
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
    />
  );
};

export default TextInput;

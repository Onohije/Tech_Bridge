import React from "react";

function InputField({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "8px",
        marginBottom: "10px",
        width: "100%",
        boxSizing: "border-box",
      }}
      required
    />
  );
}

export default InputField;

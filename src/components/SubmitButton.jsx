import React from "react";

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: "#42B72A",
        color: "white",
        border: "none",
        padding: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {text}
    </button>
  );
}

export default SubmitButton;

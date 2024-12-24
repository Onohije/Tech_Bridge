import React from "react";

function GenderSelector({ gender, handleChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Gender:</label>
      <div style={{ display: "flex", gap: "10px" }}>
        {["Female", "Male", "Custom"].map((g) => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={gender === g}
              onChange={handleChange}
            />
            {g}
          </label>
        ))}
      </div>
    </div>
  );
}

export default GenderSelector;

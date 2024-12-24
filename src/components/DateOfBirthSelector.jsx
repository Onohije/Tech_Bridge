import React from "react";

function DateOfBirthSelector({ date, month, year, handleChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Date of birth:</label>
      <div style={{ display: "flex", gap: "5px" }}>
        <select name="date" value={date} onChange={handleChange}>
          {[...Array(31)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select name="month" value={month} onChange={handleChange}>
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
            (m) => (
              <option key={m} value={m}>
                {m}
              </option>
            )
          )}
        </select>
        <select name="year" value={year} onChange={handleChange}>
          {[...Array(100)].map((_, i) => (
            <option key={2024 - i} value={2024 - i}>
              {2024 - i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DateOfBirthSelector;

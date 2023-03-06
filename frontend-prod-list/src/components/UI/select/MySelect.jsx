import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={option.value} value={option.value}>
          {option.type}
        </option>
      ))}
    </select>
  );
};

export default MySelect;

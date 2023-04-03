import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.mySelect}
      style={{ maxWidth: "250px" }}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
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

import React from "react";
import { useContext, useState } from "react";

const MyCheckbox = ({ value }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={value}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </label>
    </div>
  );
};

export default MyCheckbox;

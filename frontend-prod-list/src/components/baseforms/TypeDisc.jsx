import React, { forwardRef, useState, useImperativeHandle } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TypeDisc = forwardRef((props, ref) => {
  const [property, setProperty] = useState("");

  useImperativeHandle(ref, () => ({
    getFormData() {
      return { property };
    },
  }));

  return (
    <div
      id="productType"
      className="grid grid-cols-[auto_1fr] items-center leading-tight gap-4 pt-6"
    >
      <span>
        <label>Disc size :</label>
      </span>
      <div>
        <MyInput
          className="w-full"
          type="number"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          placeholder="Type size (MB)"
          required
        />
      </div>
    </div>
  );
});
export default TypeDisc;

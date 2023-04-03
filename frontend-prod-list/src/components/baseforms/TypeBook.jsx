import React, { useState, useImperativeHandle, forwardRef } from "react";
import MyInput from "../UI/input/MyInput";

const TypeBook = forwardRef((props, ref) => {
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
        <label>weight</label>
      </span>
      <div>
        <MyInput
          className="w-full"
          type="number"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          placeholder="Type weight"
          required
        />
      </div>
    </div>
  );
});

export default TypeBook;

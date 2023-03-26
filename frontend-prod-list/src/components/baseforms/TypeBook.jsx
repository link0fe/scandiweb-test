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
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <label>weight</label>
      <MyInput
        type="number"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
        placeholder="Type weight"
      />
    </div>
  );
});

export default TypeBook;

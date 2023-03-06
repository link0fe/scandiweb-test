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
    <div id="productType">
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

//fetch data _> SELECT ALL PRODUCTS( type book => property_id = id_books)

export default TypeBook;

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
      style={{ displaY: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <label>Disc size :</label>
      <MyInput
        type="number"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
        placeholder="Type size"
      />
    </div>
  );
});
export default TypeDisc;

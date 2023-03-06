import MyInput from "../UI/input/MyInput";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const TypeFurniture = forwardRef((props, ref) => {
  const [typeWidth, setTypeWidth] = useState("");
  const [typeLength, setTypeLength] = useState("");
  const [typeHeigth, setTypeHeigth] = useState("");

  const property = {
    typeWidth,
    typeLength,
    typeHeigth,
  };

  useImperativeHandle(ref, () => ({
    getFormData() {
      return { property };
    },
  }));

  return (
    <div id="productType">
      <label>Width :</label>
      <MyInput
        type="number"
        value={typeWidth}
        placeholder="Type width"
        onChange={(e) => setTypeWidth(e.target.value)}
      />
      <label>height :</label>
      <MyInput
        type="number"
        value={typeHeigth}
        onChange={(e) => setTypeHeigth(e.target.value)}
        placeholder="Type height"
      />
      <label>length :</label>
      <MyInput
        type="number"
        value={typeLength}
        onChange={(e) => setTypeLength(e.target.value)}
        placeholder="Type length"
      />
    </div>
  );
});

export default TypeFurniture;

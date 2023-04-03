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
    <div
      id="productType"
      className="grid grid-cols-[auto_1fr] items-center leading-tight gap-4 pt-6"
    >
      <span>
        <label>Width :</label>
      </span>
      <div>
        <MyInput
          className="w-full"
          type="number"
          value={typeWidth}
          placeholder="Type width"
          onChange={(e) => setTypeWidth(e.target.value)}
          required
        />
      </div>
      <span>
        <label>height</label>
      </span>
      <div>
        <MyInput
          className="w-full"
          type="number"
          value={typeHeigth}
          onChange={(e) => setTypeHeigth(e.target.value)}
          placeholder="Type height"
          required
        />
      </div>
      <span>
        <label>length :</label>
      </span>
      <div>
        <MyInput
          className="w-full"
          type="number"
          value={typeLength}
          onChange={(e) => setTypeLength(e.target.value)}
          placeholder="Type length"
          required
        />
      </div>
    </div>
  );
});

export default TypeFurniture;

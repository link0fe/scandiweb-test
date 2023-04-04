import { storeContext } from "../../App";
import MyInput from "../UI/input/MyInput";
import React, { forwardRef, useImperativeHandle } from "react";

const TypeFurniture = forwardRef((props, ref) => {
  const { state, dispatch } = React.useContext(storeContext);

  const property = {
    width: state.width,
    length: state.length,
    height: state.height,
  };

  useImperativeHandle(ref, () => ({
    getFormData() {
      return { width: state.width, length: state.length, height: state.height };
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
          value={state.width}
          placeholder="Type width"
          onChange={(e) => dispatch({ type: "width", payload: e.target.value })}
          min="0.01"
          step="0.01"
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
          value={state.height}
          onChange={(e) =>
            dispatch({ type: "height", payload: e.target.value })
          }
          min="0.01"
          step="0.01"
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
          value={state.length}
          onChange={(e) =>
            dispatch({ type: "length", payload: e.target.value })
          }
          min="0.01"
          step="0.01"
          placeholder="Type length"
          required
        />
      </div>
    </div>
  );
});

export default TypeFurniture;

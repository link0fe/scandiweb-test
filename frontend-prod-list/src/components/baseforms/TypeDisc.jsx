import React, { forwardRef, useState, useImperativeHandle } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { storeContext } from "../../App";

const TypeDisc = forwardRef((props, ref) => {
  const { state, dispatch } = React.useContext(storeContext);

  useImperativeHandle(ref, () => ({
    getFormData() {
      return { size: state.size };
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
          value={state.size}
          onChange={(e) => dispatch({ type: "size", payload: e.target.value })}
          placeholder="Type size (MB)"
          min="0.01"
          step="0.01"
          required
        />
      </div>
    </div>
  );
});
export default TypeDisc;

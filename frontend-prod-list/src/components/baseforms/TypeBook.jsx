import React, { useState, useImperativeHandle, forwardRef } from "react";
import MyInput from "../UI/input/MyInput";
import { storeContext } from "../../App";

const TypeBook = forwardRef((props, ref) => {
  const { state, dispatch } = React.useContext(storeContext);

  console.log(state.weight);
  useImperativeHandle(ref, () => ({
    getFormData() {
      return { weight: state.weight };
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
          value={state.weight}
          onChange={(e) =>
            dispatch({ type: "weight", payload: e.target.value })
          }
          placeholder="Type weight"
          min=".01"
          step="0.01"
          required
        />
      </div>
    </div>
  );
});

export default TypeBook;

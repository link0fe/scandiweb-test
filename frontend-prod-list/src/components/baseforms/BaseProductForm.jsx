import React, { useState, useReducer } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";
import TypeDisc from "./TypeDisc";
import TypeFurniture from "./TypeFurniture";
import TypeBook from "./TypeBook";
import { useRef } from "react";
import axios from "axios";
import { storeContext } from "../../App";
import { reducer } from "../../reducer";

const BaseProductForm = () => {
  const { formRef, state, dispatch } = React.useContext(storeContext);

  const selectMap = new Map([
    ["1", <TypeBook ref={formRef} />],
    ["2", <TypeDisc ref={formRef} />],
    ["3", <TypeFurniture ref={formRef} />],
  ]);

  const handleChangeType = (typeId) => {
    dispatch({ type: "selectedType", payload: typeId });
    // setSelectedType(typeId);
    console.log(typeId);
  };

  selectMap.get(state.selectedType);
  console.log(state);

  return (
    <form id="product_form">
      <div>
        <fieldset style={{}}>
          <div>
            <div>
              <label>SKU</label>
            </div>
            <div>
              <MyInput
                value={state.sku}
                onChange={(e) =>
                  dispatch({ type: "sku", payload: e.target.value })
                }
                type="text"
                id="sku"
                placeholder="SKU"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label>Name</label>
            </div>
            <div>
              <MyInput
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
                type="text"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div class="validation"></div>
          </div>

          <div>
            <div>
              <span>
                <label>Price</label>
              </span>
              <MyInput
                value={state.price}
                onChange={(e) =>
                  dispatch({ type: "price", payload: e.target.value })
                }
                type="text"
                id="price"
                placeholder="Price"
                required
              />
            </div>
          </div>
        </fieldset>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <label for="productType">Product type:</label>
        <MySelect
          value={state.selectedType}
          onChange={handleChangeType}
          defaultValue="Product Type"
          options={[
            { value: "1", type: "Book", id: 1 },
            { value: "2", type: "Disc", id: 2 },
            { value: "3", type: "Furniture", id: 3 },
          ]}
        />
      </div>

      <div className="product_type__form">
        {selectMap.get(state.selectedType)}
      </div>
    </form>
  );
};

export default BaseProductForm;

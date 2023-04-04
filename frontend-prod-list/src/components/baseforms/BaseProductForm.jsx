import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import TypeDisc from "./TypeDisc";
import TypeFurniture from "./TypeFurniture";
import TypeBook from "./TypeBook";
import { storeContext } from "../../App";

const BaseProductForm = () => {
  const { formRef, state, dispatch } = React.useContext(storeContext);

  const selectMap = new Map([
    ["1", <TypeBook ref={formRef} />],
    ["2", <TypeDisc ref={formRef} />],
    ["3", <TypeFurniture ref={formRef} />],
  ]);

  const handleChangeType = (typeId) => {
    dispatch({ type: "selectedType", payload: typeId });
  };
  selectMap.get(state.selectedType);

  return (
    <form id="product_form" className="max-w-3xl items-center mx-auto">
      <div className="grid grid-cols-[1fr_4fr_1fr] items-center leading-tight gap-4">
        <span>
          <label>SKU</label>
        </span>
        <div>
          <MyInput
            className="w-full"
            value={state.sku}
            onChange={(e) => dispatch({ type: "sku", payload: e.target.value })}
            type="text"
            id="sku"
            placeholder="SKU"
            required
          />
        </div>
        {state.validation ? (
          <span
            className="validation"
            style={{ width: "100px", height: "100px" }}
          >
            {state.validation}
          </span>
        ) : (
          <span>SKU should be unique</span>
        )}

        <span>
          <label>Name</label>
        </span>
        <div>
          <MyInput
            className="w-full"
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
        {state.name ? <span>OK</span> : <span>type name</span>}
        <span>
          <label>Price</label>
        </span>
        <div>
          <MyInput
            className="w-full"
            value={state.price}
            onChange={(e) =>
              dispatch({ type: "price", payload: e.target.value })
            }
            type="number"
            id="price"
            placeholder="Price"
            min=".01"
            step="0.01"
            required
          />
        </div>
        {state.price ? <span>OK</span> : <span>price should be positive</span>}

        <label for="productType">
          <span>Product type:</span>
        </label>
        <div>
          <MySelect
            required
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

        {state.selectedType ? "" : <span>select product type</span>}
      </div>
      <div className="product_type__form">
        {selectMap.get(state.selectedType)}
      </div>
    </form>
  );
};

export default BaseProductForm;

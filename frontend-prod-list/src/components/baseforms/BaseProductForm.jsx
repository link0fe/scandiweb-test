import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";
import TypeDisc from "./TypeDisc";
import TypeFurniture from "./TypeFurniture";
import TypeBook from "./TypeBook";
import { useRef } from "react";
import axios from "axios";
import { storeContext } from "../../App";

const BaseProductForm = () => {
  const {
    formRef,
    setSku,
    setName,
    setPrice,
    sku,
    name,
    price,
    selectedType,
    setSelectedType,
  } = React.useContext(storeContext);

  const selectMap = new Map([
    ["1", <TypeBook ref={formRef} />],
    ["2", <TypeDisc ref={formRef} />],
    ["3", <TypeFurniture ref={formRef} />],
  ]);

  const handleChangeType = (type) => {
    setSelectedType(type);
    console.log(type);
  };

  selectMap.get(selectedType);
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
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                type="text"
                id="sku"
                placeholder="SKU"
              />
            </div>
          </div>

          <div>
            <div>
              <label>Name</label>
            </div>
            <div>
              <MyInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div class="validation"></div>
          </div>

          <div>
            <div>
              <label>Price</label>
            </div>
            <div>
              <MyInput
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="price"
                placeholder="Price"
              />
            </div>
          </div>
        </fieldset>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <label for="productType">Product type:</label>
        <MySelect
          value={selectedType}
          onChange={handleChangeType}
          defaultValue="Product Type"
          options={[
            { value: "1", type: "Book", id: 1 },
            { value: "2", type: "Disc", id: 2 },
            { value: "3", type: "Furniture", id: 3 },
          ]}
        />
      </div>

      <div className="product_type__form">{selectMap.get(selectedType)}</div>
    </form>
  );
};

export default BaseProductForm;

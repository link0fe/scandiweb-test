import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";
import TypeDisc from "./TypeDisc";
import TypeFurniture from "./TypeFurniture";
import TypeBook from "./TypeBook";
import { useRef } from "react";
import axios from "axios";

const BaseProductForm = (props) => {
  const [selectedType, setSelectedType] = useState("");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // set id by getting from backend ? state setType id ?

  const typeRef = useRef();
  const selectMap = new Map([
    ["1", <TypeBook ref={typeRef} />],
    ["2", <TypeDisc ref={typeRef} />],
    ["3", <TypeFurniture ref={typeRef} />],
  ]);

  const addNewProduct = async (e) => {
    e.preventDefault();
    const getTypeData = typeRef.current.getFormData();

    const newProduct = {
      //id: Date.now(),
      sku,
      name,
      price,
      ...getTypeData,
      category_id: selectedType,
    };

    console.log(newProduct);
    try {
      const response = await axios.post("http://scandibackend", newProduct);
      console.log(response);
    } catch (e) {
      alert(e);
    }
  };

  const handleChangeType = (type) => {
    setSelectedType(type);
    console.log(type);
  };

  selectMap.get(selectedType);
  return (
    <form onSubmit={addNewProduct} id="product_form">
      {/* space between  and in the right side create example of created product */}
      <ul>
        <li>
          <label>SKU</label>
          <MyInput
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            type="text"
            id="sku"
            placeholder="SKU"
          />
        </li>
        <li>
          <label>Name</label>
          <MyInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Name"
          />
        </li>
        <li>
          <label>Price</label>
          <MyInput
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="price"
            placeholder="Price"
          />
        </li>
        <li>
          <MySelect
            value={selectedType}
            onChange={handleChangeType}
            defaultValue="Product Type"
            options={[
              //value change to id 1 or 2 or 3
              { value: "1", type: "Book", id: 1 },
              { value: "2", type: "Disc", id: 2 },
              { value: "3", type: "Furniture", id: 3 },
            ]}
          />
        </li>
        <li>
          <MyButton type="submit">Create</MyButton>
        </li>
        <div className="product_type__form">{selectMap.get(selectedType)}</div>
      </ul>
    </form>
  );
};

export default BaseProductForm;

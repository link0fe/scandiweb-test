import axios from "axios";
import React from "react";
import { useContext, useState } from "react";
import { Context } from "../index";
import MyCheckbox from "./UI/checkbox/MyCheckbox";
import { storeContext } from "../App";

const ProductItem = ({ product, children, prodType }) => {
  //test
  const { setCheckbox } = useContext(storeContext);
  const [isChecked, setIsChecked] = useState(false);

  const eventCheckHandler = (event) => {
    setIsChecked(!isChecked);

    product.isChecked = event.target.checked;

    // if (event.target.checked === true) {
    //   setCheckbox(event.target.id, event.target.value.toLowerCase());
    //   // const newObject = { ...myObject };
    //   // if (event.target.value === "Books") {
    //   //   newObject.Books.push(event.target.id);
    //   // } else if (event.target.value === "Discs") {
    //   //   newObject.Discs.push(event.target.id);
    //   // } else {
    //   //   newObject.Furniture.push(event.target.id);
    //   // }
    // }

    //data should be contain object with id, name of productType and productType(id)
    //send to back id / property_id which is equavalant , also send a name of tabel whic is equal to "Books"
  };

  const deleteProducts = () => {};

  return (
    <div className="product">
      <form onSubmit={deleteProducts()}>
        <input
          className="delete-checkbox"
          type="checkbox"
          id={product.id}
          value={prodType}
          checked={isChecked}
          onChange={(event) => {
            eventCheckHandler(event);
          }}
        />
        <label for={product.id}>
          <p>{product.id}</p>
          <p>{product.sku}</p>
          <p>{product.name}</p>
          <p>{product.price}$</p>
          <p>
            {/* {product.size
            ? product.size + " MB"
            : product.length
            ? product.length + " x " + product.width + " x " + product.height
            : product.weight + " KG"} */}
          </p>
          <p>{children}</p>
          {/* instead of ternary op. use props.children   */}
          {/* todo : (composition)wrapper  */}
        </label>
      </form>
    </div>
  );
};

export default ProductItem;

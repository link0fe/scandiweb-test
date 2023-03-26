import React from "react";
import { useState } from "react";
import { storeContext } from "../App";

const ProductItem = ({ product, children, prodType }) => {
  //test
  const [isChecked, setIsChecked] = useState(false);
  const { getProducts, loading, booksType, discsType, furnitureType } =
    React.useContext(storeContext);

  // const eventCheckHandler = (event) => {
  //   setIsChecked(!isChecked);
  //   product.isChecked = event.target.checked;
  // };

  return (
    <div className="product">
      <form>
        <input
          className="delete-checkbox"
          type="checkbox"
          id={product.id}
          value={prodType}
          checked={isChecked}
          onChange={(event) => {
            setIsChecked(!isChecked);
            product.isChecked = event.target.checked;
          }}
        />
        <label for={product.id}>
          <p>{product.id}</p>
          <p>{product.sku}</p>
          <p>{product.name}</p>
          <p>{product.price}$</p>
          <p>{children}</p>
        </label>
      </form>
    </div>
  );
};

export default ProductItem;

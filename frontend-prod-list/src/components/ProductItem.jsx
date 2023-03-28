import React from "react";
import { useState } from "react";

const ProductItem = ({ product, children, prodType }) => {
  const [isChecked, setIsChecked] = useState(false);

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

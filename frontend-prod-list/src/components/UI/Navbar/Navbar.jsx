import React, { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import MyButton from "../button/MyButton";
import { storeContext } from "../../../App";
import axios from "axios";
import BaseProductForm from "../../baseforms/BaseProductForm";

const Navbar = () => {
  const {
    booksType,
    discsType,
    furnitureType,
    getProducts,
    loading,
    setLoading,
    addNewProduct,
  } = React.useContext(storeContext);

  const deleteProduct = async () => {
    const arr = [...booksType, ...discsType, ...furnitureType];
    const indexArr = [];
    arr.map((element) => {
      if (element.isChecked) indexArr.push(element.id);
    });

    try {
      if (indexArr.length > 0) {
        setLoading(true);
        const response = await axios.delete(
          `http://scandibackend/?id=${indexArr}`
        );
        if (response.status === 200) {
          getProducts();
        }
      } else {
        alert(indexArr.length + " products was checked");
      }
    } catch (err) {
      alert(err);
    }
  };

  const location = useLocation();
  const isProductPage = location.pathname === "/products";

  return (
    <div className="navbar">
      {location.pathname === "/products" ? (
        <h2 style={{ color: "teal" }}>Product List</h2>
      ) : (
        <h2 style={{ color: "teal" }}>Product Add</h2>
      )}
      <div className="navbar__links">
        {location.pathname === "/products" ? (
          <div>
            <Link to="/addproduct">
              <MyButton>Add Product</MyButton>
            </Link>
            <MyButton style={{ background: "darkred" }} onClick={deleteProduct}>
              Delete Product
            </MyButton>
          </div>
        ) : (
          <div>
            <MyButton onClick={addNewProduct}>Save</MyButton>
            <Link to="/products">
              <MyButton>Close</MyButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

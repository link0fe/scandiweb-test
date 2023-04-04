import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyButton from "../button/MyButton";
import { storeContext } from "../../../App";
import axios from "axios";

const Navbar = () => {
  const { state, dispatch, getProducts, formRef } =
    React.useContext(storeContext);

  const nav = useNavigate();

  const addNewProduct = async (e) => {
    e.preventDefault();
    const getTypeData = formRef.current.getFormData();
    console.log(getTypeData);

    const newProduct = {
      sku: state.sku,
      name: state.name,
      price: state.price,
      ...getTypeData,
      category_id: state.selectedType,
    };

    try {
      const response = await axios.post("http://scandibackend", newProduct);
      const {
        data: { status },
      } = response;
      dispatch({ type: "validation", payload: response.data.message });
      console.log(state.validation);
      if (status != 409) nav("products");
    } catch (e) {
      alert(e);
    }
  };

  const deleteProduct = async () => {
    const arr = [
      ...state.booksType,
      ...state.discsType,
      ...state.furnitureType,
    ];
    const indexArr = [];
    arr.map((element) => {
      if (element.isChecked) indexArr.push(element.id);
    });

    try {
      if (indexArr.length > 0) {
        dispatch({ type: "loading", payload: true });
        const response = await axios.delete(
          `http://scandibackend/?id=${indexArr}`
        );
        if (response.status === 200) {
          alert(response);
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
            <Link to="/products">
              <MyButton onClick={addNewProduct}>Save</MyButton>
            </Link>
            <Link to="/products">
              <MyButton style={{ background: "darkred" }}>Close</MyButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

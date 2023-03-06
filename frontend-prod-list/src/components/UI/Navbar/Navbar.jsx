import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { storeContext } from "../../../App";

const Navbar = () => {
  const { booksType, discsType, furnitureType } =
    React.useContext(storeContext);

  const deleteProduct = async () => {
    console.log(booksType);
    console.log(discsType);
    console.log(furnitureType);
    const obj = {
      ...booksType.isChecked,
      ...discsType.isChecked,
      ...furnitureType.isChecked,
    };
    console.log(obj);

    const arr = [];
    console.log(arr);
    for (let i = 0; i < booksType.length; i++) {
      if (booksType[i].isChecked) {
        arr.push(booksType[i].id);
      }
    }
    // try {
    //   const response = await axios.delete("http://scandibackend?name=id");
    // } catch (e) {
    //   alert(e);
    // }
  };
  return (
    <div className="navbar">
      <Link to="/products">Product List</Link>
      <div className="navbar__links">
        <Link to="/addproduct">
          <MyButton>Add Product</MyButton>
        </Link>
        <MyButton style={{ background: "darkred" }} onClick={deleteProduct}>
          Delete Product
        </MyButton>
      </div>
    </div>
  );
};

export default Navbar;

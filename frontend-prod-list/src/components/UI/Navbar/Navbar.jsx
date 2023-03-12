import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { storeContext } from "../../../App";
import axios from "axios";

const Navbar = () => {
  const {
    booksType,
    discsType,
    furnitureType,
    getProducts,
    loading,
    setLoading,
  } = React.useContext(storeContext);

  const deleteProduct = async () => {
    console.log(booksType);
    console.log(discsType);
    console.log(furnitureType);

    const arr = [...booksType, ...discsType, ...furnitureType];
    console.log(arr);
    const indexArr = [];
    arr.map((element, index) => {
      if (element.isChecked) indexArr.push(element.id);
    });

    // try {
    //   const response = await axios.delete(`http://scandibackend/${indexArr}`);
    //   console.log(response.data);
    // } catch (err) {
    //   alert(err);
    // }
    console.log(indexArr);
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://scandibackend/?id=${indexArr}`
      );
      console.log(response);
      if (response.status === 200) {
        getProducts();
      }
    } catch (err) {
      alert(err);
    }
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

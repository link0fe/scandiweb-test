import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import "../styles/App.css";
import axios from "axios";
import Books from "../components/Layouts/Books";
import Furniture from "../components/Layouts/Furniture";
import Discs from "../components/Layouts/Discs";
import { storeContext } from "../App";

const Products = () => {
  const { getProducts, loading, booksType, discsType, furnitureType } =
    React.useContext(storeContext);
  // const [product, setProduct] = useState({
  //   booksType: [],
  //   discsType: [],
  //   furnitureType: [],
  // });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  // async function getProducts() {
  //   setLoading(true);

  //   const promises = [
  //     axios.get("http://scandibackend?name=books"),
  //     axios.get("http://scandibackend?name=discs"),
  //     axios.get("http://scandibackend?name=furniture"),
  //   ];
  //   try {
  //     const response = await Promise.all(promises);
  //     setProduct({
  //       booksType: response[0].data,
  //       discsType: response[1].data,
  //       furnitureType: response[2].data,
  //     });

  //     setLoading(false);
  //     console.log(response);
  //     console.log("test result: " + response.data);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }

  if (loading) {
    return <div className="main">LOADING ....</div>;
  }

  return (
    <div className="main">
      <Books products={booksType} title="Books" />
      <Discs products={discsType} title="Discs" />
      <Furniture products={furnitureType} title="Furniure" />
      {/* pass arr? */}
    </div>
  );
};

export default Products;

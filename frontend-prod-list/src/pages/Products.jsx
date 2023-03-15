import React, { useEffect } from "react";
import "../styles/App.css";
import Books from "../components/Layouts/Books";
import Furniture from "../components/Layouts/Furniture";
import Discs from "../components/Layouts/Discs";
import { storeContext } from "../App";

const Products = () => {
  const { getProducts, loading, booksType, discsType, furnitureType } =
    React.useContext(storeContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="main" style={{ textAlign: "center" }}>
        <h1
          style={{
            textAlign: "center",
            height: "100%",
          }}
        >
          LOADING ....
        </h1>
      </div>
    );
  }

  return (
    <div className="main">
      {booksType.length > 0 && <Books products={booksType} title="Books" />}
      {discsType.length > 0 && <Discs products={discsType} title="Discs" />}
      {furnitureType.length > 0 && (
        <Furniture products={furnitureType} title="Furniure" />
      )}
    </div>
  );
};

export default Products;

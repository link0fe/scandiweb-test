import React, { useEffect, useReducer } from "react";
import "../styles/App.css";
import Books from "../components/Layouts/Books";
import Furniture from "../components/Layouts/Furniture";
import Discs from "../components/Layouts/Discs";
import { storeContext } from "../App";
import { reducer } from "../reducer";

const Products = () => {
  const { getProducts, state, dispatch } = React.useContext(storeContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (state.loading) {
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
      {state.booksType.length > 0 && (
        <Books products={state.booksType} title="Books" />
      )}
      {state.discsType.length > 0 && (
        <Discs products={state.discsType} title="Discs" />
      )}
      {state.furnitureType.length > 0 && (
        <Furniture products={state.furnitureType} title="Furniure" />
      )}
    </div>
  );
};

export default Products;

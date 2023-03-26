import React, { useState, useRef, useReducer } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/test.css";
import Footer from "./components/UI/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import axios from "axios";
import AppRouter from "./components/AppRouter";
import { reducer } from "./reducer";
import { initialState } from "./reducer";

export const storeContext = React.createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [product, setProduct] = useState({
    booksType: [],
    discsType: [],
    furnitureType: [],
  });
  const [loading, setLoading] = useState(true);

  const formRef = useRef();

  const addNewProduct = async (e) => {
    e.preventDefault();
    const getTypeData = formRef.current.getFormData();
    console.log(state.sku);

    const newProduct = {
      //id: Date.now(),
      sku: state.sku,
      name: state.name,
      price: state.price,
      ...getTypeData,
      category_id: state.selectedType,
    };
    console.log(newProduct);
    try {
      const response = await axios.post("http://scandibackend", newProduct);
      console.log(response);
    } catch (e) {
      alert(e);
    }
  };

  async function getProducts() {
    setLoading(true);

    const promises = [
      axios.get("http://scandibackend?name=books"),
      axios.get("http://scandibackend?name=discs"),
      axios.get("http://scandibackend?name=furniture"),
    ];
    try {
      const response = await Promise.all(promises);

      // setProduct({
      //   booksType: response[0].data,
      //   discsType: response[1].data,
      //   furnitureType: response[2].data,
      // });

      if (response[0].data.length > 0) {
        dispatch({ type: "booksType", payload: response[0].data });
      }
      // dispatch({
      //   type: "setProduct",
      //   payload: response[0].data,
      // });
      // dispatch({
      //   type: "discsType",
      //   payload: response[1].data,
      // });
      // dispatch({
      //   type: "furnitureType",
      //   payload: response[2].data,
      // });

      setLoading(false);
    } catch (e) {
      alert(e);
    }
  }
  const storeValue = {
    state,
    dispatch,
    formRef,
    getProducts,
    setLoading,
    addNewProduct,
  };

  return (
    <div className="App">
      <storeContext.Provider value={storeValue}>
        <BrowserRouter>
          <Navbar />
          <hr />
          {/* <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/*" element={<Navigate to="/products" replace />} />
          </Routes> */}
          <AppRouter />
        </BrowserRouter>
        <hr />
        <Footer />
      </storeContext.Provider>
    </div>
  );
}

export default App;

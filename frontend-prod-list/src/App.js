import React, { useState, useRef } from "react";
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

export const storeContext = React.createContext({
  booksType: [],
  discsType: [],
  furnitureType: [],
  getProducts: () => {},
  setLoading: () => {},
  loading: false,
  sendNewProduct: () => {},
  formRef: {},
  setSku: () => {},
  setName: () => {},
  setPrice: () => {},
  sku: "",
  name: "",
  price: "",
  addNewProduct: () => {},
  setSelectedType: () => {},
  selectedType: 0,
});

function App() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");

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

    const newProduct = {
      //id: Date.now(),
      sku,
      name,
      price,
      ...getTypeData,
      category_id: selectedType,
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
      setProduct({
        booksType: response[0].data,
        discsType: response[1].data,
        furnitureType: response[2].data,
      });
      setLoading(false);
    } catch (e) {
      alert(e);
    }
  }
  const storeValue = {
    ...product,
    getProducts,
    loading,
    setLoading,
    formRef,
    setSku,
    setName,
    setPrice,
    sku,
    name,
    price,
    addNewProduct,
    setSelectedType,
    selectedType,
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

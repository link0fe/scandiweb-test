import React, { useState, Component } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/test.css";
import Footer from "./components/UI/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import axios from "axios";

export const storeContext = React.createContext({
  booksType: [],
  discsType: [],
  furnitureType: [],
  getProducts: () => {},
  loading: false,
});

function App() {
  const [product, setProduct] = useState({
    booksType: [],
    discsType: [],
    furnitureType: [],
  });
  const [loading, setLoading] = useState(true);

  const [arrId, setArrId] = useState({ books: [], discs: [], furniture: [] });

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
      console.log(response);
      console.log("test result: " + response.data);
    } catch (e) {
      alert(e);
    }
  }

  const storeValue = { ...product, getProducts, loading };

  return (
    <div className="App">
      <storeContext.Provider value={storeValue}>
        <BrowserRouter>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/*" element={<Navigate to="/products" replace />} />
          </Routes>
        </BrowserRouter>
        <hr />
        <Footer />
      </storeContext.Provider>
    </div>
  );
}

export default App;

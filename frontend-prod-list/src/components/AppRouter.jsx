import React from "react";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
};

export default AppRouter;

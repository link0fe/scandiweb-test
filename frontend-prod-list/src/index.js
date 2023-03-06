import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductStore from "./store/ProductStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

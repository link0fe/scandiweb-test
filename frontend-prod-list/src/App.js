import React, { useRef, useReducer } from "react";

import { BrowserRouter } from "react-router-dom";
import "./styles/test.css";
import Footer from "./components/UI/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AppRouter from "./components/AppRouter";
import { reducer } from "./reducer";
import { initialState } from "./reducer";
import Main from "./pages/Main";
import "./styles/App.css";

export const storeContext = React.createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const formRef = useRef();

  async function getProducts() {
    dispatch({ type: "loading", payload: true });

    const promises = [
      axios.get("http://scandibackend?name=books"),
      axios.get("http://scandibackend?name=discs"),
      axios.get("http://scandibackend?name=furniture"),
    ];
    try {
      const response = await Promise.all(promises);

      if (response[0].data.length > 0) {
        dispatch({ type: "booksType", payload: response[0].data });
      }
      if (response[1].data.length > 0) {
        dispatch({ type: "discsType", payload: response[1].data });
      }
      if (response[2].data.length > 0) {
        dispatch({ type: "furnitureType", payload: response[2].data });
      }
      dispatch({ type: "loading", payload: false });
    } catch (e) {
      alert(e);
    }
  }

  const storeValue = {
    state,
    dispatch,
    formRef,
    getProducts,
  };

  return (
    <div className="App">
      <storeContext.Provider value={storeValue}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <hr />
        <Footer />
      </storeContext.Provider>
    </div>
  );
}

export default App;

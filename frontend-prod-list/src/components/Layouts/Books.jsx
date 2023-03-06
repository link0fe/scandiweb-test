import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductItem from "../ProductItem";
import axios from "axios";

const Books = ({ products, title }) => {
  //do settings as cfg\
  const [checked, setChecked] = useState(false);
  const [config, setConfig] = useState([]);

  function EventCheckHandler(e) {
    //data should be contain object with id, name of productType and productType(id)
    setChecked(true);

    //send to back id / property_id which is equavalant , also send a name of tabel whic is equal to "Books"
  }

  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSLide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product__slider">
      <h1 style={{ textAlign: "center" }}>{title} 📚</h1>
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductItem product={product} key={product.id} prodType={title}>
            <input
              type="checkbox"
              id={product.id}
              value="Books"
              onChange={EventCheckHandler}
            ></input>
            {"Weight: " + product.weight + " KG"}
          </ProductItem>
        ))}
      </Slider>
    </div>
  );
};
export default Books;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductItem from "../ProductItem";
import axios from "axios";

const Furniture = ({ products, title }) => {
  //do settings as cfg

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
      <h1 style={{ textAlign: "center" }}>{title} 🛋️</h1>
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductItem product={product} key={product.id} prodType={title}>
            {"Dimension: " +
              product.height +
              " x " +
              product.width +
              " x " +
              product.length +
              " cm"}
          </ProductItem>
        ))}
      </Slider>
    </div>
  );
};
export default Furniture;

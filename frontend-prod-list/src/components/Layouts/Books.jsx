import React from "react";
import Slider from "react-slick";
import ProductItem from "../ProductItem";

const Books = ({ products, title }) => {
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

  console.log(products);
  return (
    <div className="product__slider">
      <h1 style={{ textAlign: "center" }}>Books📚</h1>
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductItem product={product} key={product.id} prodType={title}>
            {"Weight: " + product.weight + " KG"}
          </ProductItem>
        ))}
      </Slider>
    </div>
  );
};
export default Books;

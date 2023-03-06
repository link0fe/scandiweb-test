import React, { useState } from "react";
import Products from "../pages/Products";
import BaseProductForm from "./baseforms/BaseProductForm";

const ProductForm = ({ create }) => {
  // const [typeBook, setTypeBook] = useState([
  // {
  // weight:''
  // }
  // ]);
  // const [typeDisc, setTypeDisc] = useState([
  // {
  // size:''
  // }
  // ]);
  // const [typeFurniture, setTypeFurniture] = useState([
  // {
  // width:'',
  // length:'',
  // heigth:''
  // }
  // ]);

  // const prodTypeMap = new Map([
  // ['typeBook', {typeBook}] ,
  // ['typeDisc', {typeDisc}],
  // ['typeWidth', {typeWidth}],
  // ['typeLength', {typeLength}],
  // ['typeHeigth', {typeHeigth}],
  // ['typeDimension', {typeDimension}],
  // ]);
  // console.log(prodTypeMap)

  // const handleShowHide = (type) => {
  //   setSelectedType(type);
  //   console.log(type);
  //
  // }
  //
  const [product, setProduct] = useState("");
  const [isSelect, setIsSelect] = useState([
    // 'Prod1',
    // 'Prod2',
    // 'Prod3'
  ]);

  const [prodtype, setProdtype] = useState([
    {
      type: {},
    },
  ]);

  // const addNewProduct = (e) => {
  // e.preventDefault();
  // const newProduct = {
  // id: Date.now(),
  // sku,
  // name,
  // price,
  // selectedType,

  // }
  // console.log(newProduct)
  // setProduct([newProduct])
  // }

  // const addNewProductType = (e) => {
  // const productType = {
  // selectedType,
  // selectedType:{

  // }
  // }
  // }

  return <BaseProductForm />;
};
export default ProductForm;

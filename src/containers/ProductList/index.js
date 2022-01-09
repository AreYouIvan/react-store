import { ProductItem } from "../../components/ProductItem";
import "./ProductList.scss";
import React, { useEffect, useState } from "react";
import { useGetProducts } from '../../hooks/useGetProducts';
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product =>( 
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export { ProductList };

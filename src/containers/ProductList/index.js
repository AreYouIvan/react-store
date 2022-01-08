import { ProductItem } from "../../components/ProductItem";
import "./ProductList.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product =>( 
          <ProductItem />
        ))}
      </div>
    </section>
  );
};

export { ProductList };

import { ProductItem } from "../../components/ProductItem";
import styles from "./ProductList.module.scss";
import React, { useEffect, useState } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className={styles["main-container"]}>
      <div className={styles["ProductList"]}>
        {products.map(product => (
          <ProductItem product={product} key={product?.id} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };

import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = API => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios(API);
  //     setProducts(response.data);
  //     console.log('data', products)
  //     return products;
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    axios
      .get(API)
      .then(response => (response.data ? setProducts(response.data) : null))
      .catch(error => console.log("Something went wrong", error.message));
  }, [API]);
  return products;
};

export { useGetProducts };

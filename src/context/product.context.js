import React, { createContext, useState, useEffect } from "react";
import Api from "../utils/api";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    Api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message));
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;

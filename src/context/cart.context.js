import React, { createContext, useState, useEffect } from "react";
import Api from "../utils/api";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {}, []);
  return (
    <CartContext.Provider
      value={{
        products: carts,
        loading,
        error,
        total,
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

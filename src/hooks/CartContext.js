import React, { createContext, useContext, useState, useEffect } from "react";
import Api from "../api/api";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartItems: [], cartTotal: 0.0 });
  const { user } = useAuth();

  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      const fetchCart = async () => {
        try {
          const cartData = await Api.viewCart(userId);
          setCart(cartData);
        } catch (error) {
          setCart({ cartItems: [], cartTotal: 0.0 });
        }
      };
      fetchCart();
    } else {
      setCart(null);
    }
  }, [userId]);

  const addToCart = async (productId, quantity) => {
    try {
      await Api.addToCart(userId, productId, quantity);
      const updatedCart = await Api.viewCart(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      await Api.removeCartItem(userId, productId);
      const updatedCart = await Api.viewCart(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      await Api.clearCart(userId);
      setCart({ cartItems: [], cartTotal: 0.0 });
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

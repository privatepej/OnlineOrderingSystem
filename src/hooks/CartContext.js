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
      // Fetch the cart for the logged-in user
      const fetchCart = async () => {
        try {
          const cartData = await Api.viewCart(userId);
          setCart(cartData);
        } catch (error) {
          console.error("Error fetching cart:", error);
          setCart({ cartItems: [], cartTotal: 0.0 }); // Set an empty cart on error
        }
      };
      fetchCart();
    } else {
      setCart(null);
    }
  }, [userId]); // Trigger fetch whenever the user logs in or changes

  const addToCart = async (productId, quantity) => {
    try {
      await Api.addToCart(userId, productId, quantity);
      const updatedCart = await Api.viewCart(userId); // Refresh cart after adding
      setCart(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      await Api.removeCartItem(userId, productId);
      const updatedCart = await Api.viewCart(userId); // Refresh cart after removing
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      await Api.clearCart(userId);
      setCart({ cartItems: [], cartTotal: 0.0 }); // Clear the cart in the context
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

// Custom hook for consuming the cart context
export const useCart = () => {
  return useContext(CartContext);
};

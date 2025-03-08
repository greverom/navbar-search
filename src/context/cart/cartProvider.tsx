import { useState, ReactNode } from "react";
import { Product } from "../../interface/products";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    )
  );
};

const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity && item.quantity > 1 ? item.quantity - 1 : 1 } : item
  )
  .filter((item) => item.quantity && item.quantity > 0) 
  );
};

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
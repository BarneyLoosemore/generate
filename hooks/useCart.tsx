import { createContext, ReactNode, useContext, useState } from 'react';

type Context = {};

const initialContext = {};

export const CartContext = createContext<Context>(initialContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<Context>(initialContext);

  return (
    <CartContext.Provider value={{ value, setValue }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

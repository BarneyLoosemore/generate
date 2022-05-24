import { createContext, ReactNode, useContext, useState } from 'react';

type Context = {};

const initialContext = {};

export const DarkModeContext = createContext<Context>(initialContext);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<Context>(initialContext);

  return (
    <DarkModeContext.Provider value={{ value, setValue }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

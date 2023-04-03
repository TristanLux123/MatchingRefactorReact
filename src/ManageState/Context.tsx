import React, { createContext, useEffect, useState } from 'react';

interface AppContextType {
  name: any;
  setName: (name: any) => void;
}

export const AppContext = createContext<AppContextType>({
  name: '',
  setName: () => {},
});

interface AppContextProviderProps {
    children: any;
  }
  

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }:any) => {
    const [name, setName] = useState(() => {
        const storedName = localStorage.getItem('name');
        return storedName ? storedName : 'Tristan';
      });
      const [key, setKey] = useState(0);


  useEffect(() => 
  {
    localStorage.setItem('name', name);
    setKey((prevKey) => prevKey + 1); // update key to force re-render
  }, [name]);

    console.log(name)
  return (
    <AppContext.Provider key={key} value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
};
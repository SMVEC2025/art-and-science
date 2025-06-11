import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
    const[showInstantForm,setShowInstantForm]=useState(false)

  return (
    <AppContext.Provider value={{ showInstantForm,setShowInstantForm }}>
      {children}
    </AppContext.Provider>
  );
};

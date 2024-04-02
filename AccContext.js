import { createContext, useContext, useState } from "react";

const AccContext = createContext();

export const AccProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  return (
    <AccContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AccContext.Provider>
  );
};

export const useAccContext = () => {
  return useContext(AccContext);
};

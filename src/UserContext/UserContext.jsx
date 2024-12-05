import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export default function UserContextProvider({ children }) {
 
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  return (
    <UserContext.Provider value={{ loadingSpinner, setLoadingSpinner }}>
      {children} 
    </UserContext.Provider>
  );
}

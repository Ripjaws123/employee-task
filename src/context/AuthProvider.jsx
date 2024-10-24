import { createContext, useEffect } from "react";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // localStorage.clear();
  setLocalStorage();

  useEffect(() => {
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

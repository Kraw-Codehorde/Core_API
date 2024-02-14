import { createContext, useState, useContext } from "react";

import { useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const checkLoginState = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/spotify/is-authenticated",
        {
          withCredentials: true,
        }
      );
      return res.data.is_authenticated;
    } catch (err) {
      return false;
    }
  };
  const [loggedIn, setLoggedIn] = useState(() => checkLoginState());

  useEffect(() => {
    const fetchData = async () => {
      const isAuthenticated = await checkLoginState();
      setLoggedIn(isAuthenticated);
    };
    fetchData();
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
};

export { AuthContextProvider, useAuth };

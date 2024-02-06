import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return true;
    } else {
      return false;
    }
  });
  const [user, setUser] = useState(null);

  const checkLoginState = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
      setUser(token);
      //   console.log("logged in");
    } else {
      setLoggedIn(false);
      setUser(null);
      //   console.log("not logged in");
    }
  };
  //   useEffect(() => {
  //     checkLoginState();
  //   }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, checkLoginState }}>
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

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
   {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => 
    {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  const LogoutUser = () =>
    {
    setToken("");
    return localStorage.removeItem("token");
  };
  useEffect(()=>
  {
    userAuthentication();
  },[]);

  const userAuthentication = async () =>
  {
    try {
      const response = await fetch("http://localhost:8000/auth/user",
        {
        method : "GET",
        headers : { "Authorization" : `Bearer ${token}`}
      
    });
    if(response.ok)
    {
      const data = await response.json();
      console.log(data.msg);
      setUser(data.msg);
    }
    else
    {
      console.log("error")
    }
  } catch (error) {
    console.log(error)  
    }
  }
  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser ,isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("Error ha bhai");
  }
  return AuthContextValue;
};

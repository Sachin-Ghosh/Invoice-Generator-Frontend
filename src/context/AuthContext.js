// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { setCookie, removeCookie, getCookie } from '@/utils/myCookie';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the authentication token exists in the cookie
    const storedToken = getCookie("token");
    const storedAuthUser = getCookie("authUser");
    console.log(storedToken);

    if (storedToken &&  storedAuthUser) {
      setToken(storedToken);
      setAuthUser(JSON.parse(storedAuthUser));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const login = (value) => {
    setToken(value.token);
    setAuthUser(value.user);

    setCookie("authUser",JSON.stringify(value.user));
    setCookie("token", value.token);
  };

  const logout = () => {
    setToken(null);
    setAuthUser(null);
    removeCookie("token");
    removeCookie("authUser")
    localStorage.clear()
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ token, authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

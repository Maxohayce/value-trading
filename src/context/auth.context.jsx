import { createContext, useState } from "react";

export const AuthContext = createContext({
  authToken: "",
  setAuthToken: () => {},
  user: {},
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState(null);
  const Login =()=>{
    setUser()
  }
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

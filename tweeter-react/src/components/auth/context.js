import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthContextConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth";

export const AuthContextProvider=({isInitiallyLogged, children, props}) =>{
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <AuthContext.Provider
      value={{isLogged, handleLogin, handleLogout}}
    >
      {children}
    </AuthContext.Provider>
  )
}

//Para configurar un custom hook es necesario que el nombre
//empiece por use... y que dentro se llame a una hook.
//En este caso capturamos el contexto, y lo retornamos.
//Nos vamos a ahorrar llamar al useContex en todo el contexto
export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export default AuthContext;

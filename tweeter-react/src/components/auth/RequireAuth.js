import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ isLogged, children }) => {
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to='/login' state={{from: location.pathname}} />;
  }
  return children;
};

export default RequiredAuth;

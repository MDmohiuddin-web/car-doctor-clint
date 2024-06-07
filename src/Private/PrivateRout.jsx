import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/Authprovider";


const PrivateRout = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loader) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl">
        <span className="loading loading-ring loading-lg"></span>
       
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname || "/"} to="/login" replace></Navigate>
  );
};

export default PrivateRout;

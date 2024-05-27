import { useContext} from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/Authprovider";

const PrivateRout = ({ children }) => {


  const { user, loader } = useContext(AuthContext);
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

  return <NavLink to="/login" replace></NavLink>;
};

export default PrivateRout;

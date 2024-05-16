import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="capitalize ">
      <div className="w-full md:w-4/5  m-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-4/5 m-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

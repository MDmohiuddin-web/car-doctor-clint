import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <div className="capitalize ">
      <div className="w-full md:w-4/5 font-bold m-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-4/5 m-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
       
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;

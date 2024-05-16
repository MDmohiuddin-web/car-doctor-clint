import { Link } from "react-router-dom";
import facebook from "../assets/Facebook.svg";
import linkding from "../assets/Linkding.svg";
import Google from "../assets/Google.svg";
import im from "../assets/images/login/login.svg";

const Login = () => {
  return (
<div className=" flex-wrap flex   my-10   items-center ">
      <div className="bg-white p-6 rounded-lg  w-full md:w-[30%] m-auto my-5 md:h-[300px] ">
        <img src={im} alt=""  />
      </div>
      {/*  */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[35%] m-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Log in</h2>

        <form>
        <div className="mb-4">
            <label
              htmlFor="email"
           
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
            name="password"
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your password"
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-red-500 w-full text-center text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
          >
           Log In
          </button>

          <p className="mt-4 text-gray-600 text-center">Or Log in with</p>

          
          <div className="flex gap-5 my-4 justify-center ">
            <img src={Google} alt="" />
            <img src={facebook} alt="" />
            <img src={linkding} alt="" />
          </div>
        </form>

        <p className="mt-4 text-blue-500 text-center">
          Have an account?
          
          <Link to="/signup" className="text-red-500 pl-2">
            sign up
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Login;

import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from "../assets/Facebook.svg";
import linkding from "../assets/Linkding.svg";
import Google from "../assets/Google.svg";
import im from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Auth/Authprovider";
import { toast } from "react-toastify";

const Sign_Up = () => {
  const { signup, updateUserProfile, googlesign } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const signup_submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const names = form.names.value;
    const email = form.email.value;
    const Photo = form.Photo.value;
    const password = form.password.value;
    console.log(names, email, Photo, password);
    signup(email, password)
      .then((rec) => {
        updateUserProfile(names, Photo);
        // Signed in
        const user = rec.user;
        console.log(user);
        navigate(location?.state || "/");
        toast.success("signup success full");
        window.location.reload();
        //...
      })
      .catch((error) => {
        console.log(error);
        toast.error("signup failed");
        //..
      });
  };
  const glob = () => {
    googlesign()
    .then((res) => {
        console.log(res);
        toast.success("signInWithGoogle success full");
        navigate(location?.state || "/");
        
      })
     .catch((error) => {
        console.log(error);
        toast.error("signInWithGoogle failed");
      });
  };

  return (
    <div className=" flex-wrap flex  my-10  items-center ">
      <div className="bg-white p-6 rounded-lg  w-full md:w-[30%] m-auto my-5 md:h-[300px] ">
        <img src={im} alt="Login" />
      </div>
      {/*  */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[35%] m-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center"> sign up</h2>

        <form onSubmit={signup_submit}>
          <div className="mb-4">
            <label
              htmlFor="names"
              className="block text-sm font-medium text-gray-700"
            >
              names
            </label>
            <input
              type="names"
              id="names"
              name="names"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your names"
              required
            />
          </div>
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Photo url
            </label>
            <input
              type="url"
              id="Photo"
              name="Photo"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your Photo is optional"
              
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
            sign up
          </button>

          <p className="mt-4 text-gray-600 text-center">Or Sign In with</p>

          <div className="flex gap-5 my-4 justify-center ">
            <img src={Google} alt="" onClick={glob} />

            <img src={facebook} alt="" />
            <img src={linkding} alt="" />
          </div>
        </form>

        <p className="mt-4 text-blue-500 text-center">
          Have an account?
          <Link to="/login" className="text-red-500 pl-2">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sign_Up;

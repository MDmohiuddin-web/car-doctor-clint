import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import frame from "../assets/Frame.svg";
import frame1 from "../assets/Frame1.svg";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-my_color-400">
        <NavLink to="/">Home </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/login">Log in</NavLink>
      </li>
      {/* <li className="hover:text-my_color-400">
        <NavLink to="/signup">sign up</NavLink>
      </li> */}
      <li className="hover:text-my_color-400">
        <NavLink to="/about">about</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="Services">Services</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/Blog">Blog</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className=" my-5 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-4xl hover:text-my_color-400"
          >
            <img src={logo} alt="" className="h-[60px]" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className={`navbar-end  gap-5`}>
          <img src={frame} alt=""  className="cursor-pointer" />
          <img src={frame1} alt="" className="cursor-pointer" />
          
          <button className="text-red-500  btn-outline btn ">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

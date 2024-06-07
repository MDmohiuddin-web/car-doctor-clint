import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import frame from "../assets/Frame.svg";
import frame1 from "../assets/Frame1.svg";
import { useContext } from "react";
import { AuthContext } from "../Auth/Authprovider";

const Navbar = () => {
  const { user, sinout } = useContext(AuthContext);
  const logout = () => {
    sinout()
    
      .then(() => {window.location.reload()})
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <li className="hover:text-my_color-400">
        <NavLink to="/">Home </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/about">about</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="Services">Services</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/ServiceDetails">Blog</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/Contact">Contact</NavLink>
      </li>

      {/* <li className="hover:text-my_color-400">
        <NavLink to="/signup">sign up</NavLink>
      </li> */}

      {/* i dent need it  */}
      {user?.email ? (
        <>
         
          <li className="hover:text-my_color-400">
            <NavLink to="/Booking">Booking</NavLink>
          </li>
          <li className="hover:text-my_color-400">
            <NavLink to="/Profile">Profile</NavLink>
          </li>
        </>
      ) : (
        <li className="hover:text-my_color-400">
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
      {/*  */}
    </>
  );
  return (
    <div className=" my-5  ">
      <div className="navbar bg-base-100">
        <div className="navbar-start md:w-[300px] ">
          <div className="dropdown w-auto">
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
          <Link to="/">
            <img src={logo} alt="" className="h-[60px] mr-5 " />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className={`navbar-end  gap-10  md:gap-10`}>
          <div className={`flex justify-between gap-1 md:gap-5 pr-4`}>
            <img src={frame} alt="" className="cursor-pointer" />
            <img src={frame1} alt="" className="cursor-pointer" />
            <button className="text-red-500 btn-outline btn  ">
              Appointment
            </button>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    title={user?.displayName}
                    src={
                      user?.photoURL ||
                      "https://source.unsplash.com/150x150/?portrait?3"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/Profile" className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="btn   btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

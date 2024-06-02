import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./ROOT/Root";
import Error from "./Error/Error";
import Home from "./HOME/Home";
import Login from "./UserAuthontication/Login";
import Sign_Up from "./UserAuthontication/Sign_Up";
import About from "./Navbar/About";
import Services from "./Navbar/Services";
import Blog from "./Navbar/Blog";
import Contact from "./Navbar/Contact";
import Authprovider from "./Auth/Authprovider";
import CheckOutService from "./Navbar/CheckOutService";
import AddNewService from "./Navbar/AddNewService";
import BookService from "./Navbar/BookService";
import Profile from "./Navbar/Profile";
import Booking from "./Navbar/Booking";
import PrivateRout from "./Private/PrivateRout";
import ServiceDetails from "./Navbar/ServiceDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("services.json"),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Sign_Up></Sign_Up>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Profile",
        element: (
          <PrivateRout>
            <Profile></Profile>
          </PrivateRout>
        ),
      },
      {
        path: "/Booking",
        element: (
          <PrivateRout>
            <Booking></Booking>
          </PrivateRout>
        ),
      },
      {
        path: "/ServiceDetails",
        element: <ServiceDetails></ServiceDetails>,
      },

      {
        path: "/BookService/:id",
        element: <PrivateRout><BookService></BookService></PrivateRout>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id} `),
      },
      {
        path: "/CheckOutService/:id",
        element: <CheckOutService></CheckOutService>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id} `),
      },
      {
        path: "/AddNewService/:id",
        element: <AddNewService></AddNewService>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id} `),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);

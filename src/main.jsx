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
import CheckOut from "./Navbar/CheckOut";
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
        path: "/checkout/id",
        element: <CheckOutService></CheckOutService>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/CheckOutDetails/id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
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

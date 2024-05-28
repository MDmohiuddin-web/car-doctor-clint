import { Link } from "react-router-dom";
import i from "../assets/Frame@1x.svg";

const ServiceCard = ({ service ,loader}) => {
  const { title, img, price, _id} = service;
  if (loader) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl">
       <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  
  return (
    <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="h-[170px] my-2  rounded-lg "
        />
      </figure>
      <div className="p-2  justify-between">
        <h2 className="card-title">{title}</h2>
        <div className="w-full flex justify-between">
          <div className="">
            <p className="font-bold text-red-500">price : {price} $</p>
          </div>
          <div>
            <Link to={`/BookService/${_id}`} >
              <img src={i} alt="" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

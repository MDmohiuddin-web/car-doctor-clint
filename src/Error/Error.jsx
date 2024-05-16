import { Link } from "react-router-dom";
// import erroring from "../assets/error.png";
import erroring from "../assets/Frame.png";
const Error = () => {
  return (
    <div className="w-4/5 m-auto flex flex-col justify-center items-center  ">
      
      <img src={erroring} alt="" className="m-auto my-10" />
      <div>
      <Link
        to="/"
        className='bg-red-500 w-[200px] text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 text-center'
      >
        Back To Home
      </Link>
      </div>
     
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";
import img2 from "../assets/images/banner/3.jpg";
import img3 from "../assets/Framed.svg";
import img4 from "../assets/Framewhite.svg";
import arro from "../assets/Framewhite.svg";
import ivideo from "../assets/Framevideo.svg";
import arro2 from "../assets/Frame@1x.svg";
import logo2 from "../assets/logo.svg";

const ServiceDetails = () => {
  return (
    <div className="">
      <div className="img">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white absolute top-1/2 left-[10%]">
          ServiceDetails
        </h2>
        <div className="bg-red-500 absolute bottom-0 px-10 p-3 md:left-[40%]  text-white rounded-t-xl ">
          <Link to="/">Home</Link> / <Link>ServiceDetails</Link>
        </div>
      </div>

      <div className="w-full mx-auto my-10  flex gap-5 flex-wrap ">
        <div className="w-full md:w-[68%]  ">
          <div>
            <img
              src={img2}
              alt=""
              className="bg-cover bg-center rounded-lg max-h-96 w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl my-10">Unique Car Engine Service</h2>
            <p className="text-gray-400 mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which dent look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there inst anything embarrassing hidden in the
              middle of text.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-between gap-5 ">
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Instant Car Services</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">24/7 Quality Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Easy Customer Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Quality Cost Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div className="my-10">
            <p className="text-gray-400 mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which dent look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there inst anything embarrassing hidden in the
              middle of text.
            </p>
            {/* becaus i do not added 3 steps */}
            {/* <h2 className="text-4xl my-10">3 Simple Steps to Process</h2>
            <p className="text-gray-400 mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which dent look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there inst anything embarrassing hidden in the
              middle of text.
            </p> */}
          </div>
          <div className="images flex justify-center items-center">
            <img src={ivideo} alt="" />
          </div>
        </div>

        <div className="w-full md:w-[30%] ">
          <div className="rounded-lg  my-5">
            <div className="bg-[#f3f3f3] p-5 rounded-lg shadow-md ">
              <div>
                <h2 className="text-2xl font-semibold mb-4"> Services</h2>
              </div>
              {/*  */}
              <div className="flex justify-between items-center rounded-lg shadow-md bg-red-500 text-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Full Car Repair</h4>
                <img src={arro} alt="" />
              </div>
              {/*  */}
              {/*  */}
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Engine Repair</h4>
                <img src={arro2} alt="" />
              </div>
              {/*  */}
              {/*  */}
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Automatic Services</h4>
                <img src={arro2} alt="" />
              </div>
              {/*  */}
              {/*  */}
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Engine Oil Change</h4>
                <img src={arro2} alt="" />
              </div>
              {/*  */}
              {/*  */}
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Battery Charge</h4>
                <img src={arro2} alt="" />
              </div>
              {/*  */}
            </div>
          </div>
          <div className="w-full bg-black rounded-lg p-5 ">
            <div className="text-white my-2 text-2xl ">
              <h2>Download</h2>
            </div>
            {/* 1 */}
            <div className="flex justify-between items-center my-5 relative">
              <div>
                <img src={img3} alt="" />
              </div>
              <div className="absolute left-1/4">
                <h3 className="text-white ">Our Brochure</h3>{" "}
                <p className="text-gray-400 ">Download</p>
              </div>
              <div className="bg-red-500 rounded-lg p-2 ">
                <img src={img4} alt="" />
              </div>
            </div>
            {/* 2 */}
            <div className="flex justify-between items-center relative">
              <div>
                <img src={img3} alt="" />
              </div>
              <div className="absolute left-1/4">
                <h3 className="text-white ">Company Details</h3>{" "}
                <p className="text-gray-400 ">Download</p>
              </div>
              <div className="bg-red-500 rounded-lg p-2 ">
                <img src={img4} alt="" />
              </div>
            </div>
            {/* 3 */}
          </div>

          <div className="w-full bg-black rounded-lg p-5 my-10 justify-center items-center flex-wrap">

            <div className="text-white w-4/5 m-auto p-5 items-center justify-center flex">
              <img src={logo2} alt="" />
            </div>
            {/* for logo  */}
            <div className="text-white w-4/5 m-auto p-5 items-center justify-center flex text-center">
              <h2 className="">Need Help? We Are Here To Help You</h2>
            </div>
            {/* for text */}
            <div className="bg-white md:w-4/5 m-auto rounded-lg relative my-10  p-5 items-center justify-center flex flex-col">
              <h2 className="text-2xl">
                <span className="text-red-500">Car Doctor</span> Special
              </h2>
              <h4 className="text-gray-400 my-5">
                Save up to <span className="text-red-500">60% off</span>
              </h4>
              <button className="bg-red-500 px-10 text-white absolute bottom-[-20px] btn border-none  ">Get A Quote</button>

            </div>
            {/* for button nad box */}
          </div>

          <div>
            <h2 className="text-2xl my-5">Price $250.00</h2>
            <button className= "  w-full bg-red-500 text-white  btn border-none  ">Proceed Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

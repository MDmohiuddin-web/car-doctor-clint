import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/Authprovider";

const BookService = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;

  const { user } = useContext(AuthContext);

  //, img,_id

  const servicehandelr = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const dates = form.dates.value;
    const email = user?.email;

    // const Phone = form.Phone.value;
    // const Order = form.Order.value;
    const Order = {
      Name,
      email,
      dates,
      servicetitele: title,
      service_id: _id,
      price,
      img,
      // Phone,
    };
    // const serviceType = form.serviceType.value;
    console.log(
      Name,
      dates,
      email,
      Order
      // serviceType,
      // Phone,
    );

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-full mx-auto px-5  bg-white rounded-lg ">
      <div className="img">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white absolute top-1/2 left-[10%]">
          Book Service
        </h2>
        <div className="bg-red-500 absolute bottom-0 px-10 p-3 left-[40%]  text-white rounded-t-xl ">
          <Link to="/">Home</Link> / <Link to='/Booking'>Booked Serviced</Link>
        </div>
      </div>
      {/*  */}

      <div className="w-full mx-auto p-6 my-10 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-center text-3xl">service name : {title}</h1>
        {/* <p> price : {price}</p> */}
      </div>
      {/*  */}

      <div className="w-full mx-auto p-6 my-10 bg-gray-50 rounded-lg shadow-md">
        <form onSubmit={servicehandelr}>
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                required
                type="text"
                id="Name"
                name="Name"
                defaultValue={user?.displayName}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter  name"
              />
            </div>
            {/*  */}
            <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Service date
              </label>
              <input
                required
                type="date"
                id="dates"
                name="dates"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter service price"
              />
            </div>
            {/*  */}
          </div>
          <div className="flex flex-wrap gap-5 justify-between">
            {/* <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Your Phone Number
              </label>
              <input
                required
                type="Phone"
                id="Phone"
                name="Phone"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter Your Phone Number"
              />
            </div> */}
            <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                defaultValue={user?.email}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter Your Email"
              />
            </div>
            {/*  */}
            <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Service Price
              </label>
              <input
                required
                type="number"
                id="servicePrice"
                name="servicePrice"
                defaultValue={price}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter service price"
              />
            </div>
            {/*  */}
            {/* <div className="mb-4  md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="maintenance">Maintenance</option>
                <option value="repair">Repair</option>
                <option value="inspection">Inspection</option>
              </select>
            </div> */}
            {/*  */}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              required
              id="Order"
              name="Order"
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <button
            onClick={() => {
              alert("Your Booking is Done");
              
            }}
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;

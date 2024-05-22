import { Link, useLoaderData } from "react-router-dom";


const AddNewService = () => {
    const service = useLoaderData();
  const { price, title } = service;
    const AddNewService = async (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const text_here = form.text_here.value;
        const serviceType = form.serviceType.value;
        const productDescription = form.productDescription.value;
        console.log(
          serviceName,
          servicePrice,
          text_here,
          serviceType,
          productDescription
        );
      };
    return (
        <div className="w-full mx-auto px-5  bg-white rounded-lg ">
        <div className="img">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white absolute top-1/2 left-[10%]">
          Add New Service
          </h2>
          <div className="bg-red-500 absolute bottom-0 px-10 p-3 left-[40%]  text-white rounded-t-xl ">
            <Link to='/'>Home </Link>/ <Link to='/Services'>services</Link>
          </div>
        </div>
        {/*  */}
  
        <div className="w-full mx-auto p-6 my-10 bg-gray-50 rounded-lg shadow-md">
          <h1 className="text-center text-3xl">service name : {title}</h1>
          {/* <p> price : {price}</p> */}
        </div>
        {/*  */}
  
        <div className="w-full mx-auto p-6 my-10 bg-gray-50 rounded-lg shadow-md">
          <form onSubmit={AddNewService}>
            <div className="flex flex-wrap gap-5 justify-between">
              <div className="mb-4  md:w-[48%]">
                <label className="block text-sm font-medium text-gray-700">
                  Service Name
                </label>
                <input
                required

                  type="text"
                  id="serviceName"
                  name="serviceName"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter service name"
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
            </div>
            <div className="flex flex-wrap gap-5 justify-between">
              <div className="mb-4  md:w-[48%]">
                <label className="block text-sm font-medium text-gray-700">
                  Text here
                </label>
                <input
                required
                  type="number"
                  // id="servicePrice"
                  name="text_here"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter Text here"
                />
              </div>
              {/*  */}
              <div className="mb-4  md:w-[48%]">
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
              </div>
              {/*  */}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Description
              </label>
              <textarea
              required
                id="productDescription"
                name="productDescription"
                rows="3"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <button
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

export default AddNewService;
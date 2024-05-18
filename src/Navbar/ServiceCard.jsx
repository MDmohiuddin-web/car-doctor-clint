import i from "../assets/Frame@1x.svg";
const ServiceCard = ({ service }) => {
  return (
    <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2">
      <figure>
        <img
          src={service.img}
          alt="Shoes"
          className="h-[170px] my-2  rounded-lg "
        />
      </figure>
      <div className="p-2  justify-between">
        <h2 className="card-title">{service.title}</h2>
        <div className="w-full flex justify-between">
         
          <div className="">
            <p className="font-bold text-red-500">price : {service.price} $</p>
          </div>
          <div>
            <img src={i} alt=""  className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

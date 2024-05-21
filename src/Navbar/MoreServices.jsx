
import info from "../assets/Group.svg";

const MoreServices = () => {
  return (
    <div className="w-full  text-center my-5 md:my-10">
      <button className="text-red-500  btn-outline btn ">More Services</button>
      <img src={info} alt="" className="mt-5 md:mt-16 " />
    </div>
  );
};

export default MoreServices;

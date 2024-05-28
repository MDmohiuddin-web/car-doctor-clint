import img1 from "../assets/images/about_us/person.jpg";
import img2 from "../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-wrap gap-5 my-10  ">
      <div className="md:w-[48%] relative">
        <img src={img1} alt="" className="w-3/4 rounded-lg" />
        <img
          src={img2}
          alt=""
          className="md:w-1/2 absolute right-5 md:top-40 rounded-lg border-white border-8 photo"
        />
      </div>
      {/*  */}
      <div className="md:w-[48%] space-y-3 px-5 text-center md:text-left">
        <h4 className="text-red-500 font-bold">about us</h4>
        <h2 className="md:text-5xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which dent look even slightly believable.
        </p>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which dent look even slightly believable.
        </p>
        <Link to='/ServiceDetails' className="bg-red-500 text-white  btn border-none  ">
          Get More Info
        </Link>
      </div>
    </div>
  );
};

export default About;

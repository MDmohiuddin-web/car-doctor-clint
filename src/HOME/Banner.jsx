import banerimg5 from "../assets/images/banner/1.jpg";
import banerimg2 from "../assets/images/banner/2.jpg";
import banerimg3 from "../assets/images/banner/3.jpg";
import banerimg4 from "../assets/images/banner/4.jpg";
import banerimg1 from "../assets/images/banner/5.jpg";
import banerimg6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[500px] font-bold rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banerimg1} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide6"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banerimg2} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={banerimg3} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banerimg4} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src={banerimg5} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banerimg6} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide5"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full">
        <img src={banerimg1} className="w-full " />
        <div className="absolute flex   h-full  w-full p-5 md:p-10 bottom-20 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21 ,21, 0)]">
          <div className=" md:w-[50%]  md:my-10 ">
            <h3 className="md:text-6xl text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="md:my-5 my-2 text-white text-[10px] md:text-[16px]">
              There are many variations of passages of available, majority have
              suffered alteration in some form
            </p>
            <div className="gap-5 flex ">
              <button className="bg-red-500 text-white  btn border-none  ">
                Discover More
              </button>
              <button className="text-white btn-outline btn ">
                Latest Project
              </button>
            </div>
          </div>

          <div className="flex gap-5 absolute bottom-2 md:bottom-20 right-20 md:right-0 md:pr-10">
            <a
              href="#slide6"
              className="btn btn-circle bg-[#616c7d] border-0 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-red-500 border-0  text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

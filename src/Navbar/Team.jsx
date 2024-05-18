import member1 from '../assets/images/team/1.jpg'
import member2 from '../assets/images/team/2.jpg'
import member3 from '../assets/images/team/3.jpg'
import social from '../assets/midia.svg'

const Team = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2">
        <figure>
          <img
            src={member1}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <img src={social} alt="" className='h-[30%] pl-[20%]'/>
        </div>
      </div>
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2">
        <figure>
          <img
            src={member2}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <img src={social} alt="" className='h-[30%] pl-[20%]'/>
        </div>
      </div>
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2">
        <figure>
          <img
            src={member3}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <img src={social} alt="" className='h-[30%] pl-[20%]'/>
        </div>
      </div>
    </div>
  );
};

export default Team;

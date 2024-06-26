import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/Authprovider";
import { useState } from "react";
import BookingCard from "./BookingCard";
import axios from "axios";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://car-server-eta-lyart.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setBookings(res.data);
      
    });
    //oater native option

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  return (
    <div className="overflow-x-auto capitalize">
      <div className="img mb-10 md:mb-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white absolute top-1/2 left-[10%]">
          {bookings.length} Cart Details
        </h2>
        <p className="text-red-500 font-semibold mb-4  absolute top-[60%] left-[10%]">
          Home - Product Details
        </p>
      </div>

      <table className="table overflow-hidden ">
        {/* <h1 className="text-3xl text-center">Booking {bookings.length}</h1> */}
        {bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            bookings={bookings}
            setBookings={setBookings}
          ></BookingCard>
        ))}
      </table>
    </div>
  );
};

export default Booking;

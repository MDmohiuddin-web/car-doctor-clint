import { toast } from "react-toastify";

const Ard = ({ booking, setBookings, bookings }) => {
  const { Name, servicetitele, dates, price, img, _id, status } = booking;

  const deleted = (id) => {
    const priced = window.confirm("Delete this booking?");
    if (priced) {
      fetch(`https://car-server-eta-lyart.vercel.app/bookings/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Successfully deleted
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
            toast.success("Deleted successfully");
          } else {
            // Failed to delete
            toast.error("Failed to delete");
          }
        })
        .catch((error) => {
          console.log(error);
          // Handle any fetch or parsing errors
          toast.error("An error occurred while deleting");
        });
    } else {
      // Failed to delete
      toast.error("Failed to delete");
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://car-server-eta-lyart.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <tbody className="">
      <tr className="hover:scale-105 duration-300 hover:shadow-lg translate-x-5 ease-out flex flex-wrap">
        <td className="flex  md:w-1/2 justify-around p-2  flex-wrap px-4 ">
        <td >
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded-lg w-12 h-12">
                <img
                  src={
                    img ||
                    "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{Name}</div>
              <div className="text-sm opacity-50">{servicetitele}</div>
            </div>
          </div>
        </td>
        <td >{price} $</td>
        <td >{dates}</td>
        </td>
        <th className="flex justify-end gap-2 md:w-1/2 md:pr-10 items-center w-4/5">
          {status === "confirm" ? (
            <span className="text-green-500 btn-outline btn">Confirmed</span>
          ) : (
            <button
              onClick={() => handleConfirm(_id)}
              className="text-red-500 btn-outline btn"
            >
              Please Confirm
            </button>
          )}
          <button
            onClick={() => deleted(_id)}
            className="bg-red-500 text-white btn border-none"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Ard;

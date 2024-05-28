

const Ard = ({ booking, setBookings, bookings }) => {
  const { Name, servicetitele, dates, price, img, _id, status } = booking;

  const deleted = (id) => {
    const priced = window.confirm("Delete this booking?");
    if (priced) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
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
    <tbody>
      <tr className="hover:scale-105 duration-300 hover:shadow-lg translate-x-5 ease-out">
        <td>
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
        <td>{price} $</td>
        <td>{dates}</td>
        <th className="flex justify-center gap-2">
          {status === "confirm" ? (
            <span className="text-green-500 btn-outline btn">Confirm</span>
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

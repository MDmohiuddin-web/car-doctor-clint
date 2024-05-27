const ard = ({ booking }) => {
  const { Name, servicetitele, dates, price, img, _id } = booking;

  const deleted = (id) => {
    const priced = confirm("delete this booking?");
    if (priced) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            window.location.reload();
          }
        });
    }
  };


  const HandelConfirm=id=>{
    fetch(`http://localhost:3000/bookings/${id}`
        , {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        json: JSON.stringify({ status: "Confirmed" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            window.location.reload();
          }
        })
    
    
  }
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
        <td>
          {price} $
          {/* <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span> */}
        </td>
        <td>{dates}</td>
        <th className="flex justify-center gap-2">
          <button
            onClick={() => HandelConfirm(_id)}
            className="text-red-500 btn-outline btn"
          >
            Confirm
          </button>
          <button
            onClick={() => deleted(_id)}
            className="bg-red-500 text-white  btn border-none"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default ard;

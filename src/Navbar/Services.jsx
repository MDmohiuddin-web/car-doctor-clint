import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard"; // Assuming you have a ServiceCard component

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON file
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures the fetch runs once

  return (
    <div className="my-5 flex flex-wrap gap-5 justify-center">
      {/* <h4>Total Services: {services.length}</h4> */}
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;

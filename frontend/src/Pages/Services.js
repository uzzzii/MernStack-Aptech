import React, { useState, useEffect } from "react";
import { GetServices } from "../Hooks/getServices";

function Services() {
  const [data, setData] = useState(null); // State to hold the fetched services data
  const [serives, setSerives] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  // Fetch services when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await GetServices(); // Get services data from API
      setData(servicesData.data); // Store fetched data in state
    };

    fetchServices();
  }, []); // Empty dependency array to fetch only on mount

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSerives({
      ...serives,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/serives/addservices",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(serives),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Added successfully!", type: "success" });
        setSerives({
          name: "",
          description: "",
          price: "",
        });
      } else {
        setMessage({ text: data.msg, type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Form for adding new services */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96 mb-8">
          <h1 className="text-2xl text-center mb-6">Add New Service</h1>

          {message.text && (
            <div
              className={`mb-4 p-2 rounded ${
                message.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={serives.name}
              onChange={handleInput}
              placeholder="Service Name"
              className="bg-gray-700 text-white rounded mb-4 w-full p-2"
              required
            />
            <input
              type="text"
              name="description"
              value={serives.description}
              onChange={handleInput}
              placeholder="Description"
              className="bg-gray-700 text-white rounded mb-4 w-full p-2"
              required
            />
            <input
              type="number"
              name="price"
              value={serives.price}
              onChange={handleInput}
              placeholder="Price"
              className="bg-gray-700 text-white rounded mb-4 w-full p-2"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded p-2 transition duration-200"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>

      {/* Display fetched services */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 m-5">
        <h2 className="text-xl font-semibold mb-4">Available Services</h2>
        {data ? (
          Array.isArray(data) ? (
            <ul className="space-y-4">
              {data.map((service) => (
                <li
                  key={service.id}
                  className="p-4 bg-gray-700 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p>{service.description}</p>
                  <p className="text-green-500 mt-2">${service.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Data is not in the expected format</p>
          )
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </>
  );
}

export default Services;

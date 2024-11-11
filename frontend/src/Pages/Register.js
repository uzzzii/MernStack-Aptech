import React, { useState } from "react";
import { useAuth } from "../users/auth";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  // const storeTokenInLS = useAuth();
  const [message, setMessage] = useState({ text: "", type: "" }); // State for messages

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      // storeTokenInLS(data.token)


      // Check if registration was successful
      if (response.ok) {
        setMessage({ text: "Registered successfully!", type: "success" }); // Set success message
        setUser({
          username: "",
          email: "",
          password: "",
          phone: "",
        });
      } else {
        setMessage({ text: data.msg, type: "error" }); // Set error message from server
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "An error occurred. Please try again.", type: "error" }); // Set fetch error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl text-center mb-6">Register</h1>
        
        {message.text && (
          <div className={`mb-4 p-2 rounded ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
            placeholder="Username"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Email"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
            required
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            placeholder="Password"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
            required
          />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            placeholder="Phone No"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded p-2 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

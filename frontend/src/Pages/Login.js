import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" }); // New state for message

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
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      
      // Check if login was successful
      if (response.ok) {
        setMessage({ text: "Logged in successfully", type: "success" }); // Set success message
      } else {
        setMessage({ text: data.msg, type: "error" }); // Set error message from server
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "An error occurred. Please try again.", type: "error" }); // Set fetch error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl text-center mb-6">Login</h1>
        
        {message.text && (
          <div className={`mb-4 p-2 rounded ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {message.text}
          </div>
        )}
        
        <form className="max-w-md mx-auto p-6 bg-gray-800" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Email"
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Password"
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded p-2 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

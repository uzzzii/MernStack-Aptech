import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => 
    {
    e.preventDefault();
    console.log(user);
    const response = await fetch("http://localhost:8000/auth/registration",
    {
      method: "POST",
      headers:
      {
        "content-Type":"application/json",
      },
      body:JSON.stringify(user)
    })
    const data = await response.json();
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
            placeholder="Username"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Email"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            placeholder="Password"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
          />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            placeholder="Phone No"
            className="bg-gray-700 text-white rounded mb-4 w-full p-2"
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

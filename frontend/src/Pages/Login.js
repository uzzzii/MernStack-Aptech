import React, { useState } from "react";


function Login() {

    const [user, setUser] = useState({
  
      email: "",
      password: "",

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
      const response = await fetch("http://localhost:8000/auth/login",
      {
        method: "POST",
        headers:
        {
          "content-Type":"application/json",
        },
        body:JSON.stringify(user)
      })
      const data = await response.json();
    alert(data.msg)
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl text-center mb-6">Login</h1>
        <form className="max-w-md mx-auto p-6 bg-gray-800" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">
              Email
            </label>
            <input
            name="email"
              type="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Email"
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Password"
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

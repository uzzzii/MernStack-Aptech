import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation if using React Router
import { useAuth } from '../users/auth';

function Navbar1() {
  const {isLoggedIn} = useAuth();
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("light", !darkMode);
  };
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-300">REACT Project</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          {
            isLoggedIn ? (<Link to="/logout" className="hover:text-gray-300">Logout</Link>)
            :
          (
            <>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          </>
          )
}
          <button onClick={toggleDarkMode} className="p-2 bg-indigo-600 text-white rounded">
        Switch Theme
      </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

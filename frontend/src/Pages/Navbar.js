import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation if using React Router

function Navbar1() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-300">REACT Project</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

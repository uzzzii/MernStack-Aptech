// src/components/HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Welcome to My Website</h2>
          <p className="text-lg mb-6">Building modern, beautiful, and fast websites with React and Tailwind CSS.</p>
          <a href="#"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Features</h3>
            <p className="text-gray-600 mt-4">Explore the key features of our platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Fast</h4>
              <p className="text-gray-600">Optimized performance and speed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Responsive</h4>
              <p className="text-gray-600">Adapts to any screen size.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Secure</h4>
              <p className="text-gray-600">Built with the latest security standards.</p>
            </div>
            
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Fast</h4>
              <p className="text-gray-600">Optimized performance and speed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Responsive</h4>
              <p className="text-gray-600">Adapts to any screen size.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">Secure</h4>
              <p className="text-gray-600">Built with the latest security standards.</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

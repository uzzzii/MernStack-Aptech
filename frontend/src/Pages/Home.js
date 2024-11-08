// src/components/HomePage.js
import React from "react";
import abc from "../assets/images/abc.jpg"; // Adjust the path based on your folder structure
import abc2 from "../assets/images/abc2.jpg"; // Adjust the path based on your folder structure
import abc1 from "../assets/images/abc1.jpg"; // Adjust the path based on your folder structure

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-indigo-600 text-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Welcome to My Website</h2>
          <p className="text-lg mb-6">
            Building modern, beautiful, and fast websites with React and
            Tailwind CSS.
          </p>
          <a
            href="#"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold dark:text-white">Features</h3>
            <p className="dark:text-white mt-4">
              Explore the key features of our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img src={abc} alt="Fast" className="mx-auto mb-4 w-80" />
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                Fast
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized performance and speed.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img src={abc2} alt="Responsive" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                Responsive
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Adapts to any screen size.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img src={abc1} alt="Secure" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                SUPRA
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">
                RATATATATATATATATATATATA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

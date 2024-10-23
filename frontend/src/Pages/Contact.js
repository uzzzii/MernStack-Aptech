import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.success || "Message sent successfully!");
        setErrorMessage("");

        // Clear the form
        setFormData({
          username: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccessMessage("");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error during Sending Message:", error);
      setSuccessMessage("");
      setErrorMessage("Internal server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000); // Clear messages after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="max-w-lg mx-auto mt-9 bg-gray-800 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-400">
        Contact Us
      </h2>

      {errorMessage && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-500 bg-red-800 rounded-lg"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
          </svg>
          <span className="font-medium">Error: {errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-800 rounded-lg"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
          </svg>
          <span className="font-medium">Success: {successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-white bg-gray-800"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Phone</label>
          <input
            type="tel" // Phone input type
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-white bg-gray-800"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-white bg-gray-800"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

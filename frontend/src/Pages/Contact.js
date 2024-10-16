import React, { useState } from 'react';

const ContactForm = () => {
  const [username, setUsername] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Basic validation
    if (!username || !contactNo || !message) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log({ username, contactNo, message });
      setSuccess('Message sent successfully!');
      setUsername('');
      setContactNo('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-4/5">
        <h2 className="text-2xl text-center mb-4">Contact Us</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="contactNo">Contact No</label>
            <input
              type="tel"
              id="contactNo"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 11-digit contact number."
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-400">Enter your 11-digit contact number.</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-500 text-white rounded p-2 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
    
import React from 'react';
import { useAuth } from '../users/auth';

function About() {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="text-center p-8 bg-black bg-opacity-50 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome{'  '}
          <span className={user ? 'text-yellow-400 mr-4' : 'text-gray-200 mr-4'}>
  {user ? user.username : 'Guest'}
</span>

            to our Website!
        </h1>
        
        <p className="text-lg text-gray-300 mb-6">
          {user
            ? 'We are glad to have you back! Explore our site and enjoy the features.'
            : 'Please log in or sign up to get the most out of our platform.'}
        </p>
        
        <div className="mt-4">
          {!user && (
            <button className="bg-red-500 text-white py-2 px-6 rounded-full text-lg transition-colors hover:bg-red-400">
              <a href="/login">Login</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;

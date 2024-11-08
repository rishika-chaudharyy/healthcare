import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onLogin function passed from App with the credentials
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-indigo-700 flex flex-col items-center justify-center text-white py-6 px-4">
      {/* Introductory Text */}
      <div className="text-center mb-12 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
          Welcome to Healthcare Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-6">
          Revolutionizing healthcare with AI-driven insights and real-time patient monitoring. Our platform empowers
          healthcare providers with predictive tools that improve patient care and outcomes.
        </p>
        <p className="text-sm text-gray-300">
          Log in to your account and explore advanced features designed for seamless healthcare management.
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            New to Healthcare Solutions?{' '}
            <a href="/signup" className="text-teal-600 hover:text-teal-700">Sign up</a>
          </p>
          <p className="mt-2">
            Forgot your password?{' '}
            <a href="/forgot-password" className="text-teal-600 hover:text-teal-700">Reset it here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

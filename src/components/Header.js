import React from 'react';
import { FaHeartbeat, FaBrain, FaChartLine } from 'react-icons/fa'; // Importing icons for healthcare, AI, and analytics

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-700 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 shadow-xl drop-shadow-2xl p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:from-teal-500 hover:to-indigo-700">
          <span className="flex justify-center items-center space-x-2">
            <FaHeartbeat className="text-3xl text-red-400" />
            <FaBrain className="text-3xl text-purple-400" />
            <FaChartLine className="text-3xl text-yellow-400" />
          </span>
          <span className="mt-4 block text-white text-lg sm:text-xl md:text-2xl shadow-md">
            Empowering Healthcare with Real-Time Monitoring and Predictive Insights
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white mt-4 font-light max-w-2xl mx-auto shadow-md">
          Revolutionizing the way we manage healthcare through AI-driven insights, predictive analytics, and real-time monitoring.
        </p>
      </div>
    </div>
  );
};

export default Header;

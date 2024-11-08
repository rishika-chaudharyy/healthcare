import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Hero Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhlYWx0aGNhcmUlMjBtb3JlJTIwaW4lMjB3aWR0aCUyMGxlc3MlMjBpbiUyMGhlaWdodHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Healthcare Hero"
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      {/* Text Overlay */}
      <div className="absolute bottom-8 left-8 w-full max-w-3xl text-left text-white px-4 sm:px-8 lg:px-16 z-10">
        <div>
          {/* Main Heading */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-purple-800 bg-clip-text bg-gradient-to-r from-blue-400 via-green-300 to-yellow-400 shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
            Revolutionizing Healthcare with AI & Real-Time Monitoring
          </h1>
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-black bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
            Join us in transforming healthcare delivery with predictive insights and seamless patient monitoring that helps doctors provide better care and improves outcomes.
          </p>
          {/* Button */}
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

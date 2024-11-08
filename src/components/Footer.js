import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-700 text-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {/* Logo or Brand Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Healthcare Solutions</h2>
          <p className="text-sm">Revolutionizing healthcare with AI-driven insights</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <a href="#home" className="hover:text-pink-500 transition-all duration-300">Home</a>
          <a href="#about" className="hover:text-pink-500 transition-all duration-300">About Us</a>
          <a href="#services" className="hover:text-pink-500 transition-all duration-300">Services</a>
          <a href="#contact" className="hover:text-pink-500 transition-all duration-300">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-4 mt-6 text-sm">
          <p>&copy; 2024 Healthcare Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

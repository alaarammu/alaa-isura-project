import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-purple-950 text-white text-center">
    <div className=" border-t border-purple-500 pt-4 text-sm text-center"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">Food4Thought is a platform designed to support workforces in the software engineering industry. We host colleague communities for employees to share eachothers knowledge, experience, and offer  support. Our aim is to help save your time with social capital, and fill a gap in the market!</p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">City of London, United Kingdom</p>
            <p className="text-sm">alaarammu@gmail.com</p>
            <p className="text-sm">madiwilage.ie@gmail.com</p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-purple-500 transition duration-300">
                <FaFacebook className="text-5xl" />
              </a>
              <a href="#" className="text-white hover:text-purple-500 transition duration-300" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-5xl" />
              </a>
              <a href="#" className="text-white hover:text-purple-500 transition duration-300" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-5xl" />
              </a>
              <a href="#" className="text-white hover:text-purple-500 transition duration-300" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-purple-500 pt-6 text-sm text-center pb-4">
        <p>&copy; {new Date().getFullYear()} FoodForThought. All rights reserved.</p>
      </div>
    </footer>
  );
}
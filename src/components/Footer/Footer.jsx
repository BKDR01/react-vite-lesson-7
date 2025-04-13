import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E3F] text-white py-12 px-4 text-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <div className='flex items-center w-[90px] border-r-1'>
          <div className="border border-cyan-400 rotate-45 w-10 h-10 flex items-center justify-center"></div>
          <span className="font-bold text-white ml-[20px] absolute">Skilline</span>
          </div>
          <div className="text-left text-sm leading-5">
            <p className="font-medium">Virtual Class</p>
            <p className="font-medium">for Zoom</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-medium mb-4">Subscribe to get our Newsletter</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full outline-none bg-[#2D2D5A] placeholder-gray-400 text-white border border-gray-500 w-64"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-sm text-gray-400 mt-8 space-x-4">
          <a href="#" className="hover:text-white">Careers</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>

        <div className="text-sm text-gray-500 mt-2">
          © 2021 Class Technologies Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

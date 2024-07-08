import React from 'react';
import hero from '../../assets/hero.svg';

const HomeHero = () => {
  return (
    <section id="home-hero" className="bg-green-50 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left md:py-24 px-6 md:px-10 mt-16 md:mt-5">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-custom">
          Find, hire and onboard world-class talents effortlessly
        </h1>
        <p className="text-sm md:text-lg mt-4 text-gray-600 font-custom">
          Fort simplifies your hiring process, allowing you to source, screen and select candidates who are the perfect fit for your organisation.
        </p>
        <div className="w-full md:max-w-96 mt-8 flex flex-col md:flex-row md:space-x-4 items-center md:items-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 md:p-4 border rounded-md w-full md:flex-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-0"
          />
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 md:py-4 rounded-md border w-full md:w-auto md:flex-none font-semibold hover:bg-green-50 transition duration-300">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0">
        <img src={hero} alt="Hero" className="w-full h-auto max-w-lg md:max-w-xl" />
      </div>
    </section>
  );
};

export default HomeHero;

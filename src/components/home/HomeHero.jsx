// src/components/home/HomeHero.jsx
import React from 'react';
import hero from '../../assets/hero.svg';

const HomeHero = () => {
  return (
    <section id="home-hero" className="bg-white h-screen flex items-center justify-between py-24 px-10">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold leading-tight font-custom">Find, hire and onboard world-class talents effortlessly</h1>
        <p className="text-lg mt-4 text-gray-600 font-custom">Fort simplifies your hiring process, allowing you to source, screen and select candidates who are the perfect fit for your organisation.</p>
        <div className="mt-8 flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 border rounded-md h-full w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white px-6 py-4 rounded-md border h-full w-52 font-semibold hover:bg-green-600 transition duration-300">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={hero} alt="Hero" className="w-full h-auto max-w-2xl" />
      </div>
    </section>
  );
};

export default HomeHero;

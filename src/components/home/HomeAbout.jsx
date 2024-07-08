// src/components/home/HomeAbout.jsx
import React from 'react';

const HomeAbout = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold font-custom">
          One platform built for <span className="hidden md:inline"><br /></span> different use cases
        </h2>
        <p className="mt-2 text-sm md:text-lg text-gray-400">Trusted by the world best companies.</p>
      </div>
    </section>
  );
};

export default HomeAbout;

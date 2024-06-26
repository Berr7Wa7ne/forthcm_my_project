import React from 'react';
import { Link } from 'react-router-dom';

const HomeRecruit = () => {
  return (
    <section className="my-12">
      <div className="justify-between max-w-[80rem] m-auto px-6">
        <div className="md:pt-10 text-center flex flex-col">
          <h1 className="text-2xl md:text-[2.3rem] font-semibold font-custom">
            Start Recruiting With <br className="block md:hidden" /> Fort Now
          </h1>
          <p className="mt-4 mb-6 text-[#667085] font-custom">
            Join the exceptional Recruiters and Organization’s leveraging <br className="hidden md:block" /> Fort to elevate their recruitment.
          </p>
          <div className="md:mx-auto mb-6 md:flex items-center">
            <button className="font-custom py-3 px-6 text-white w-full md:w-auto md:mr-4 rounded-lg outline-none flex justify-center items-center bg-gradient-to-r from-gradientStart to-gradientEnd">
              Join Waitlist
            </button>
            <Link
              to="/contact-us"
              className="py-2.5 flex justify-center px-5 w-full md:w-auto mt-4 md:mt-0 items-center bg-black rounded-lg border text-white outline-none"
            >
              <span className="mr-3 font-custom">Contact Sales</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecruit;

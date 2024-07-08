import React from 'react';
import whyUs1 from '../../assets/why-us1.svg';
import whyUs2 from '../../assets/why-us2.svg';
import whyUs3 from '../../assets/why-us3.svg';

const WhyUs = () => {
  return (
    <section className="bg-green-50 md:py-16 py-4  flex flex-col md:flex-row m-auto px-6 md:px-16">
      <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
        <img src={whyUs1} alt="Why Us 1" className="col-span-2" />
        <img src={whyUs2} alt="Why Us 2" />
        <img src={whyUs3} alt="Why Us 3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-[75px] order-1 md:order-2 md:bg-transparent bg-primary-50">
        <div className="p-5">
          <span className="p-3 w-14 h-14 flex items-center justify-center rounded-full bg-[#0A99401A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <p className="font-semibold md:text-[20px] text-base mt-5 md:mb-5 mb-2 font-custom">
            Stability & Reliability
          </p>
          <p className="text-[#98A2B3] text-[14px] md:whitespace-nowrap md:text-base font-custom">
            We strive to deliver a robust platform
            <br className="hidden md:block" /> that organizations can depend
            <br className="hidden md:block" /> on, ensuring seamless operations.
          </p>
        </div>
        <div className="p-5">
          <span className="p-3 w-14 h-14 flex items-center justify-center rounded-full bg-[#0A99401A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 23s8-4 8-10V5L13 2 5 5v7c0 6 8 10 8 10z" />
              <polyline points="8 12 12 16 18 10" />
            </svg>
          </span>
          <p className="font-semibold md:text-[20px] text-base mt-5 md:mb-5 mb-2 font-custom">
            Strength & Protection
          </p>
          <p className="text-[#98A2B3] text-[14px] md:text-base font-custom">
            Fort is designed to safeguard and
            <br className="hidden md:block" /> protect the vital assets of any
            <br className="hidden md:block" /> organization – its people.
          </p>
        </div>
        <div className="p-5">
          <span className="p-3 w-14 h-14 flex items-center justify-center rounded-full bg-[#0A99401A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <p className="font-semibold md:text-[20px] text-base mt-5 md:mb-5 mb-2 font-custom">
            Strategic Positioning
          </p>
          <p className="text-[#98A2B3] text-[14px] md:whitespace-nowrap md:text-base font-custom">
            Fort offers organizations strategic
            <br className="hidden md:block" /> insights and actionable data,
            <br className="hidden md:block" /> empowering them to make informed
            <br className="hidden md:block" /> decisions about their workforce.
          </p>
        </div>
        <div className="p-5">
          <span className="p-3 w-14 h-14 flex items-center justify-center rounded-full bg-[#0A99401A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 23s8-4 8-10V5L13 2 5 5v7c0 6 8 10 8 10z" />
              <polyline points="8 12 12 16 18 10" />
            </svg>
          </span>
          <p className="font-semibold md:text-[20px] text-base mt-5 md:mb-5 mb-2 font-custom">
            Unity & Collaboration
          </p>
          <p className="text-[#98A2B3] text-[14px] md:text-base font-custom">
            Our solutions enable seamless
            <br className="hidden md:block" /> communication, enhances
            <br className="hidden md:block" /> employees engagement, and
            <br className="hidden md:block" /> promotes collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
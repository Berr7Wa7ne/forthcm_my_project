// src/components/home/HomeAboutCtd.jsx
import React, { useEffect, useRef } from 'react';
import recruitmentUseCase from '../../assets/recruitment-use-case.png';
import organisation from '../../assets/organisation.png';
import designer from '../../assets/designer.svg';
import developer from '../../assets/developer.svg';
import skeleton from '../../assets/skeleton.svg';
import abiola from '../../assets/abiola.svg';

const HomeAboutCtd = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elements = entry.target.querySelectorAll('.animate-on-scroll');
        if (entry.isIntersecting) {
          elements.forEach(element => {
            element.classList.remove('hidden');
            if (element.classList.contains('scroll-left')) {
              element.classList.add('slide-left');
            } else if (element.classList.contains('scroll-right')) {
              element.classList.add('slide-right');
            }
          });
        } else {
          elements.forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('slide-left', 'slide-right');
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 px-8 flex justify-center">
      <div className="space-y-24 max-w-4xl">
        {/* First Card (Recruiters) */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-24">
          <div className="relative order-2 md:order-1 md:w-1/2">
            <img src={recruitmentUseCase} alt="Talent Acquisition" />
            <img
              className="absolute h-[75px] md:h-auto bottom-[10px] right-[-21px] md:right-[-72px] hidden animate-on-scroll scroll-right"
              id="rightElement0"
              src={designer}
            />
            <img
              className="absolute h-[75px] md:h-auto right-[-20px] md:right-[-72px] hidden animate-on-scroll scroll-left"
              style={{ bottom: '80px' }}
              id="leftElement0"
              src={developer}
            />
          </div>
          <div className="order-1 md:w-1/2 md:ml-[140px]">
            <span className="text-primary-400 md:text-[16px] text-[14px] md:uppercase md:font-semibold inline-block mb-3 font-custom text-green-600">Recruiters</span>
            <h2 className="md:text-[28px] text-base font-semibold md:leading-[36px] leading-6 font-custom">
              Elevate Talent <br className="hidden md:block" /> Acquisition for Your <br className="hidden md:block" /> Clients
            </h2>
            <p className="md:my-6 my-4 text-[#606060] font-custom">
              Fort helps you effortlessly manage job posts, <br className="hidden md:block" /> applications, and team collaborations, enabling <br className="hidden md:block" /> you to attract and hire the best candidates.
            </p>
            <a href="#" className="flex items-center font-semibold cursor-pointer md:mt-4 md:text-base text-[14px] mb-8 md:mb-0">
              <span className="mr-2 font-custom">Get started with hiring</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="15"
                viewBox="0 0 30 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="25" y2="12"></line>
                <polyline points="15 5 25 12 15 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Second Card (Organisations) */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-24">
          <div className="order-1 md:w-1/2 md:mr-[140px]">
            <span className="text-primary-400 md:text-[16px] text-[14px] md:uppercase md:font-semibold inline-block mb-3 font-custom text-green-600">Organisations</span>
            <h2 className="md:text-[28px] text-base font-semibold md:leading-[36px] leading-6 font-custom">
              Enhance Your <br className="hidden md:block" /> Organization’s Hiring <br className="hidden md:block" /> Strategy
            </h2>
            <p className="md:my-6 my-4 text-[#606060] font-custom">
              Fort enables you to streamline your recruitment <br className="hidden md:block" /> processes, automate repetitive hiring tasks, and <br className="hidden md:block" /> make data-driven decisions to support your <br className="hidden md:block" /> organization's talent strategy.
            </p>
            <a href="#" className="flex items-center font-semibold cursor-pointer md:mt-4 md:text-base text-[14px] mb-8 md:mb-0">
              <span className="mr-2 font-custom">Streamline your hiring process now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="15"
                viewBox="0 0 30 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="25" y2="12"></line>
                <polyline points="15 5 25 12 15 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="relative order-2 md:order-2 md:w-1/2">
            <img src={organisation} alt="Hiring Strategy" />
            <img
              className="absolute h-[75px] md:h-auto bottom-[10px] right-[-21px] md:right-[-72px] hidden animate-on-scroll scroll-right"
              id="rightElement1"
              src={skeleton}
            />
            <img
              className="absolute h-[75px] md:h-auto right-[-20px] md:right-[-72px] hidden animate-on-scroll scroll-left"
              style={{ bottom: '70px' }}
              id="leftElement1"
              src={abiola}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutCtd;

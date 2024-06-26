import React, { useEffect, useState } from 'react';
import jobListing from '../../assets/job-listing.svg';
import simplify from '../../assets/simplify.png';
import collaborate from '../../assets/collaborate.png';
import communicate from '../../assets/communicate.png';
import dataDriven from '../../assets/data.svg';

const images = [jobListing, simplify, collaborate, communicate, dataDriven];

const HomeTitle = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const sections = document.querySelectorAll('.process-section');
    let currentIndex = sections.length - 1; // Default to last section

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentIndex = index;
      }
    });

    if (scrollPosition >= sections[sections.length - 1].getBoundingClientRect().top + window.scrollY + sections[sections.length - 1].clientHeight) {
      currentIndex = sections.length - 1;
    }

    setCurrentImage(currentIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // To set the initial image based on the initial scroll position
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#101828] mt-24">
      <div className="justify-between max-w-[80rem] m-auto px-6">
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-white text-center text-2xl md:text-5xl md:leading-[60px] md:mb-8 mb-2 font-semibold font-custom">
            Streamline your <span className="text-green-500">hiring</span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-green-300 to-green-400 text-clip text-transparent bg-clip-text">
              process
            </span>{' '}
            with Fort
          </h1>
          <div className="md:grid md:grid-cols-2 gap-y-32 gap-x-32 justify-between relative">
            <div>
              <div className="flex flex-col justify-between text-center md:text-start mb-0 md:mb-[50px] process-section" id="processContent0">
                <div className="text-white py-3 my-4">
                  <h1 className="text-white md:text-3xl text-base font-semibold md:my-6 my-3 font-custom">Source Talents Easily</h1>
                  <p className="text-[#DFE2E4] font-custom">Talent acquisition demands efficiency. With Fort, you can <br /> create compelling job posts and identify talents perfect fit <br /> for your team.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-center md:text-start mb-0 md:mb-[50px] process-section" id="processContent1">
                <div className="text-white py-3 my-4">
                  <h1 className="text-white md:text-3xl text-base font-semibold md:my-6 my-3 font-custom">Track and Manage Applicants with Ease</h1>
                  <p className="text-[#DFE2E4] font-custom">Keeping track of applicants and managing their <br /> information can be overwhelming. Our intuitive interface <br /> simplifies applicant tracking and management, enabling <br /> you to stay in control and make decisions with clarity.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-center md:text-start mb-0 md:mb-[50px] process-section" id="processContent2">
                <div className="text-white py-3 my-4">
                  <h1 className="text-white md:text-3xl text-base font-semibold md:my-6 my-3 font-custom">Collaborate Effectively with Your Team</h1>
                  <p className="text-[#DFE2E4] font-custom">We know that collaboration among team members is <br /> crucial for successful hiring. Fort allows you to collaborate <br /> seamlessly with your hiring team, making collective <br /> decisions and improving the recruitment process.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-center md:text-start mb-0 md:mb-[50px] process-section" id="processContent3">
                <div className="text-white py-3 my-4">
                  <h1 className="text-white md:text-3xl text-base font-semibold md:my-6 my-3 font-custom">Communicate Seamlessly For a Smooth Hiring Process</h1>
                  <p className="text-[#DFE2E4] font-custom">Communication is key during the hiring process. Fort enables constant and <br /> transparent communication with applicants, <br /> keeping them engaged and informed every step of the way.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-center md:text-start mb-0 md:mb-[50px] process-section" id="processContent4">
                <div className="text-white py-3 my-4">
                  <h1 className="text-white md:text-3xl text-base font-semibold md:my-6 my-3 font-custom">Make Informed Decisions with Data-Driven Insights</h1>
                  <p className="text-[#DFE2E4] font-custom">Data and analytics provide valuable insights into your <br /> recruitment process. Fort empowers you with data-driven <br /> decision-making by offering relevant reports and analytics, <br /> helping you refine your strategies for even better results.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block sticky top-[6rem] md:h-[500px] overflow-x-clip">
              {images.map((img, index) => (
                <img
                  key={index}
                  className={`md:absolute top-[2rem] md:w-[638px] transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  src={img}
                  alt={`process ${index}`}
                  style={{ filter: 'none' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTitle;

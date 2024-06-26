import React from 'react';
import { Link } from 'react-router-dom';
import Footerlogo from '../../assets/Footer_logo.png';

const Footer = () => {
  return (
    <footer className="text-white text-base bg-[#0C111D] px-6 py-8 w-full">
      <div className="max-w-[80rem] m-auto">
        <div className="w-full mt-6 mb-6">
          <Link to="/">
          <img src={Footerlogo} alt="ForthCM Logo" className="h-10 mr-4" />
          </Link>
        </div>
        <ul className="list-none grid grid-cols-1 md:flex flex-row mt-3 mb-6">
          <li className="md:mr-4 mb-2 font-semibold">
            <Link to="/about-us" className="font-custom no-underline">
              About Us
            </Link>
          </li>
          <li className="md:mx-4 mb-2 md:mb-0 font-semibold">
            <Link to="/contact-us" className="font-custom no-underline">
              Contact Us
            </Link>
          </li>
          <li className="md:mx-4 mb-2 md:mb-0 font-semibold">
            <a href="https://medium.com/@fort_hcm" className="font-custom no-underline">
              Blog
            </a>
          </li>
          <li className="md:mx-4 mb-2 md:mb-0 font-semibold">
            <a href="https://jobs.forthcm.com" target="_blank" className="font-custom no-underline flex items-center">
              <span>Jobs</span>&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
          <li className="md:mx-4 mb-2 md:mb-0 font-semibold">
            <Link to="/privacy-policy" className="font-custom no-underline">
              Privacy Policy
            </Link>
          </li>
          <li className="md:mx-4 mb-2 md:mb-0 font-semibold">
            <Link to="/terms-of-use" className="font-custom no-underline">
              Terms of Use
            </Link>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row items-center pt-8 border-t-[.1px] border-white text-[#D0D5DD] mb-4">
          <p className="font-custom order-2 md:order-1">
            © 2024 Fort. Powered by Pyranex HQ. All rights reserved.
          </p>
          <div className="flex items-center gap-5 mr-auto md:mr-0 mb-6 md:mb-0 md:ml-auto order-1 md:order-2">
            <a target="_blank" href="https://www.instagram.com/fort__hcm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://twitter.com/fort_hcm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                </g>
              </svg>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/forthcm/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                    <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                </g>
              </svg>
            </a>
            <a target="_blank" href="https://www.medium.com/@fort_hcm?is_from_webapp=1&sender_device=pc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                    <path d="M45,4h-40c-0.552,0 -1,0.448 -1,1v40c0,0.552 0.448,1 1,1h40c0.552,0 1,-0.448 1,-1v-40c0,-0.552 -0.448,-1 -1,-1zM40,13.5l-1.821,2.197c-0.115,0.114 -0.179,0.268 -0.179,0.428v16.625c0,0.16 0.064,0.314 0.179,0.428l1.821,2.368v0.454h-10v-0.454l2.821,-2.368c0.115,-0.114 0.179,-0.268 0.179,-0.428v-14.871l-8.152,18.121h-0.001h-1.543v0l-8.304,-17.625v13.108c0,0.22 0.076,0.433 0.215,0.605l2.785,3.458v0.454h-8v-0.454l2.783,-3.438c0.14,-0.172 0.217,-0.387 0.217,-0.608v-15.112c0,-0.142 -0.05,-0.279 -0.142,-0.388l-1.858,-2.5v-0.5h7.097l7.624,16.183l7.281,-16.183h6.998z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

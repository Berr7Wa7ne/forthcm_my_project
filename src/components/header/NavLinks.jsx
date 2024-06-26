import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // If using react-router for navigation

const NavLinks = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-green-500 underline underline-offset-4 decoration-2 decoration-green-500'
      : 'text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500';
  };

  const externalLinkClass = 'text-gray-700 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500 transition-colors duration-300';

  return (
    <ul className="flex space-x-8 items-center text-lg font-custom">
      <li>
        <Link to="/" className={`transition-colors duration-300 ${getLinkClass('/')}`}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={`transition-colors duration-300 ${getLinkClass('/about')}`}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" className={`transition-colors duration-300 ${getLinkClass('/contact')}`}>
          Contact Us
        </Link>
      </li>
      <li>
        <a href="https://jobs.example.com" className={`flex items-center gap-1 ${externalLinkClass}`}>
          Jobs
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
    </ul>
  );
};

export default NavLinks;

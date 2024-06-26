// src/components/header/Sidebar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white p-4">
          <NavLinks />
          <a href="#" className="bg-black text-white py-2 px-4 rounded mt-4 block">
            Contact Sales
          </a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

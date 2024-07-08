import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/forth_logo.svg';
import NavLinks from './NavLinks';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-green-50 flex flex-col md:hidden">
          <div className="flex items-center justify-between p-5">
            <img src={logo} alt="Logo" className="h-8" />
            <AiOutlineClose
              size={30}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <nav className="flex-grow ml-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;

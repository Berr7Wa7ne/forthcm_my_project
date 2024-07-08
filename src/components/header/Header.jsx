import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import logo from '../../assets/forth_logo.svg';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-green-50 md:bg-white flex items-center justify-between z-50">
      <div className="flex items-center justify-between w-full px-6 py-3 md:hidden">
        <img src={logo} alt="ForthCM Logo" className="h-10 mr-auto" />
        <AiOutlineMenu
          size={30}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="hidden md:flex items-center justify-between w-full px-6 py-3">
        <img src={logo} alt="ForthCM Logo" className="h-10 mr-4" />
        <nav className="flex items-center justify-center flex-grow space-x-6">
          <NavLinks />
        </nav>
        <a href="#" className="bg-black text-white py-2 px-4 rounded hover:bg-green-500">
          Contact Sales
        </a>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;

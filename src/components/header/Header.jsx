import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import logo from '../../assets/forth_logo.svg';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideOnHero, setHideOnHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHideOnHero(true);
        } else {
          setHideOnHero(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    const heroElement = document.getElementById('home-hero');
    if (heroElement) {
      observer.observe(heroElement);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow p-0 flex items-center justify-between transition-transform duration-300 z-50 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center flex-grow-0 m-auto px-6 py-3">
        <img src={logo} alt="ForthCM Logo" className="h-10 mr-4" />
      </div>
      <nav className="hidden md:flex items-center justify-center flex-grow space-x-6">
        <NavLinks />
      </nav>
      <div className="flex items-center flex-grow-0 m-auto px-6 py-3">
        <a href="#" className="bg-black text-white py-2 px-4 rounded">
          Contact Sales
        </a>
        <div className="md:hidden ml-4">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;

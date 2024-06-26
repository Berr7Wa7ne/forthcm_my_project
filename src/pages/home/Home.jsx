// src/pages/home/Home.jsx
import React from 'react';
import Header from '../../components/header/Header';
import HomeHero from '../../components/home/HomeHero';
import HomeAbout from '../../components/home/HomeAbout';
import HomeAboutCtd from '../../components/home/HomeAboutCtd';
import HomeTitle from '../../components/home/HomeTitle';
import WhyUsTitle from '../../components/home/WhyUsTitle';
import WhyUs from '../../components/home/WhyUs';
import HomeAccordion from '../../components/home/HomeAccordion';
import HomeRecruit from '../../components/home/HomeRecruit';
import Footer from '../../components/footer/Footer';

const Home = () => {
  console.log('Rendering Home Component');
  return (
    <>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeAboutCtd />
      <HomeTitle />
      <WhyUsTitle />
      <WhyUs />
      <HomeAccordion />
      <HomeRecruit />
      <Footer />
    </>
  );
};

export default Home;

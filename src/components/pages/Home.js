import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <img src='../../images/img-1.jpg' alt='hello' />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

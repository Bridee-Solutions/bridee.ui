import React from 'react';
import Header from '../../componentes/Header';
import HeroSection from '../../Componentes/HeroSection';
import SearchBar from '../../componentes/SearchBar';
import Plannin from '../../Componentes/Plannin';
import Services from '../../Componentes/Services';
import Locations from '../../Componentes/Locations';
import Dresses from '../../Componentes/Dresses';
import Testimonials from '../../Componentes/Testimonials';
import CallToAction from '../../Componentes/CallToAction';
import FAQ from '../../Componentes/FAQ';
import EmailSubscription from '../../Componentes/EmailSubscription';
import Footer from '../../componentes/Footer';

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchBar />
      <Plannin/>
      <Services />
      <Locations />
      <Dresses />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <EmailSubscription/>
      <Footer />
    </div>
  );
}

export default LandingPage;

import React from 'react';
import styles from './LandingPage.module.css'
import Header from '../../componentes/Header';
import SearchBar from '../../componentes/SearchBar';
import Benefits from '../../componentes/Benefits';
import Categories from '../../componentes/Categories';
import WeddingLocations from '../../componentes/WeddingLocations';
import WeddingDresses from '../../componentes/WenddingDresses';
import UserReviews from '../../componentes/UserReviews';
import WenddingPlannerCTA from '../../componentes/WenddingPlannerCTA';
import FAQ from '../../componentes/FAQ';
import Newsletter from '../../componentes/Newsletter';
import Footer from '../../componentes/Footer';
import Banner from '../../componentes/Banner';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
    <Header />
    <div>
    <Banner />
    <SearchBar /> 
    <Benefits />
    <Categories />
    <WeddingLocations />
    <WeddingDresses />
    <UserReviews />
    <WenddingPlannerCTA />
    <FAQ />
    <Newsletter /> 
      </div>
      <Footer /> 
      
      </div>
    );
  }
  
  export default LandingPage;
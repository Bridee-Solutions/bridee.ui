import React from 'react';
import styles from './LandingPage.module.css'
import Header from '../../componentes/Header';
import SearchBar from '../../componentes/SearchBar';
import Features from '../../componentes/Features';
import Categories from '../../componentes/Categories';
import WeddingLocations from '../../componentes/WeddingLocations';
import WeddingDresses from '../../Componentes/WeddingDresses';
import UserReviews from '../../Componentes/UserReviews';
import WeddingPlannerCTA from '../../Componentes/WeddingPlannerCTA';
import FAQ from '../../Componentes/FAQ';
import Newsletter from '../../Componentes/NewsLetter';
// import Footer from './Footer';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <Header />
      { <main>
        <SearchBar /> 
         <Features />
        <Categories />
        <WeddingLocations />
         <WeddingDresses />
         <UserReviews />
        <WeddingPlannerCTA />
         <FAQ />
        <Newsletter /> 
      </main> }
      {/* <Footer />  */}
    
    </div>
  );
}

export default LandingPage;
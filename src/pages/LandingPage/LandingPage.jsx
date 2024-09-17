import React from 'react';
import styles from './LandingPage.module.css'
import Header from '../../componentes/Header';
// import SearchBar from './SearchBar';
// import Features from './Features';
// import VendorCategories from './VendorCategories';
// import WeddingLocations from './WeddingLocations';
// import WeddingDresses from './WeddingDresses';
// import UserReviews from './UserReviews';
// import WeddingPlannerCTA from './WeddingPlannerCTA';
// import FAQ from './FAQ';
// import Newsletter from './Newsletter';
// import Footer from './Footer';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <Header />
      {/* <main>
        <SearchBar />
        <Features />
        <VendorCategories />
        <WeddingLocations />
        <WeddingDresses />
        <UserReviews />
        <WeddingPlannerCTA />
        <FAQ />
        <Newsletter />
      </main> */}
      {/* <Footer /> */}
    
    </div>
  );
}

export default LandingPage;
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Features from './Features';
import VendorCategories from './VendorCategories';
import WeddingLocations from './WeddingLocations';
import WeddingDresses from './WeddingDresses';
import UserReviews from './UserReviews';
import WeddingPlannerCTA from './WeddingPlannerCTA';
import FAQ from './FAQ';
import Newsletter from './Newsletter';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <SearchBar />
        <Features />
        <VendorCategories />
        <WeddingLocations />
        <WeddingDresses />
        <UserReviews />
        <WeddingPlannerCTA />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <style jsx>{`
        .landing-page {
          background-color: #fbf9f7;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
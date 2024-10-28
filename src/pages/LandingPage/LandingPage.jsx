import styles from "./LandingPage.module.css";
import Header from "../../componentes/LandingPage/Header/Header";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Benefits from "../../componentes/LandingPage/Benefits/Benefits";
import Categories from "../../componentes/LandingPage/Categories/Categories";
import 'normalize.css';

import WeddingLocations from "../../componentes/LandingPage/WeddingLocations/WeddingLocations";
import WeddingDresses from "../../componentes/LandingPage/WeddingDresses/WeddingDresses";
import UserReviews from "../../componentes/LandingPage/UserReviews/UserReviews";
import WeddingPlannerCTA from "../../componentes/LandingPage/WeddingPlannerCTA/WeddingPlannerCTA";
import FAQ from "../../componentes/LandingPage/FAQ/FAQ";
import Newsletter from "../../componentes/LandingPage/Newsletter/Newsletter";
import Footer from "../../componentes/LandingPage/Footer/Footer";
import Banner from "../../componentes/LandingPage/Banner/Banner";

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
        {/* <UserReviews /> */}
        <WeddingPlannerCTA />
        <FAQ />
        <Newsletter />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;

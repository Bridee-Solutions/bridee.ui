import React from 'react';
import styles from './LandingPage.module.css'
import Header from '../../componentes/Header';
import SearchBarContainer from '../../Componentes/SearchBarContainer';
import Features from '../../componentes/Features';
import ContainerVestido from '../../Componentes/ContainerVestido';
import Venue from '../../Componentes/Venue';
import NossosClientes from '../../Componentes/NossosClientes';
import UltimaSessao from '../../Componentes/UltimaSessao';
import FAQ from '../../Componentes/FAQ';
// import Footer from './Footer';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <Header />
      { <main>
        <SearchBarContainer /> 
         <Features />
        <ContainerVestido />
        <Venue />
         <UltimaSessao />
         <UserReviews />
        <NossosClientes/>
         <FAQ />
        <Newsletter /> 
      </main> }
      {/* <Footer />  */}
    
    </div>
  );
}

export default LandingPage;
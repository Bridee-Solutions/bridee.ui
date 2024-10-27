import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Container from "../../componentes/ContainerPages/Container";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Assessores.module.css";
import { Quadros } from "../../componentes/QuadrosPortifolio/Quadros";
import bannerAssessores from "../../assets/bannerAssessores.png"

function Assessores() {
  return (
    <div className={styles.assessores_page}>
      <Navbar />
      <Container
        bannerTitle="Encontre os melhores assessores para seu casamento"
        bannerSubtitle="Explore nossos profissionais e encontre o assessor ideal para , planejar cada detalhe do seu dia perfeito."
        bannerImage={bannerAssessores}
      />
      <div className={styles.assessores_content}>
          <Quadros />
      </div>
      <div className={styles.assessores_footer}>
        <Baseboard/>
      </div>
    </div>
  );
}

export default Assessores;

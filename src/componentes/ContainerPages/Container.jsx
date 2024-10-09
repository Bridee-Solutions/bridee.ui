import React from "react";
import styles from "./Container.module.css"; 
import bannerAssessores from "../../assets/bannerAssessores.png";
import Banner from "../LandingPage/Banner/Banner";

const Container = () => {
  return (
    <div className={styles["box"]}>
      <Banner 
        titulo="Encontre os melhores assessores para seu casamento" 
        subtitulo="Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito." 
        imagem={bannerAssessores} style={{height: '60vh'}}
      />

      
      <div className={styles["rectangle"]} />
    </div>
  );
}

export default Container;

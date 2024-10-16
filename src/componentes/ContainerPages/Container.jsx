import React from "react";
import styles from "./Container.module.css"; 
import bannerAssessores from "../../assets/bannerAssessores.png";
import Banner from "../LandingPage/Banner/Banner";
import SearchBar from "../LandingPage/SearchBar/SearchBar";

const Container = () => {
  return (
    <div className={styles["box"]}>
      <div className={styles["rectangle"]}></div>
      <Banner 
        titulo="Encontre os melhores assessores para seu casamento" 
        subtitulo="Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito." 
        imagem={bannerAssessores}
        style={{height: '60vh'}}
      />



      <div className={styles["searchBar"]}>
        <SearchBar
          placeholder="Pesquisar por nome do assessor"
        />
      </div>
    </div>
  );
}

export default Container;

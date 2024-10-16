import React from "react";
import styles from "../../componentes/ContainerPages/Container.module.css"; 
import bannerLocais from "../../assets/bannerLocais.png"; 
import Banner from "../../componentes/LandingPage/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";

const LocaisBanner = () => {
  return (
    <div className={styles["box"]}>
      {/* O background escurecido */}
      <div className={styles["rectangle"]}></div>
      
      {/* Banner */}
      <Banner 
        titulo="Encontre os melhores locais para seu casamento" 
        subtitulo="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais para um dia verdadeiramente memorável." 
        imagem={bannerLocais} 
        style={{height: '60vh'}}
      />

      {/* Barra de Pesquisa */}
      <div className={styles["search-container"]}>
        <div className={styles["searchBar"]}>
          <SearchBar placeholder="Pesquisar por local" />
          <SearchBar placeholder="Estado" />
          <button className={styles["searchButton"]}>Pesquisar</button>
        </div>
      </div>
    </div>
  );
}

export default LocaisBanner;

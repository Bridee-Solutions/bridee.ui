import React from "react";
import styles from "./Container.module.css"; 
import Banner from "../LandingPage/Banner/Banner";
import SearchBar from "../LandingPage/SearchBar/SearchBar";

const Container = ({bannerTitle, bannerSubtitle, bannerImage}) => {
  return (
    <div className={styles["box"]}>
      <div className={styles["rectangle"]}></div>
      <Banner 
        titulo={bannerTitle} 
        subtitulo={bannerSubtitle} 
        imagem={bannerImage}
      
      />
    </div>
  );
}

export default Container;

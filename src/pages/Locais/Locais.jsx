import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Container from "../../componentes/ContainerPages/Container";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Locais.module.css";
import { Quadros } from "../../componentes/QuadrosPortifolio/Quadros";
import Banner from "../../componentes/LandingPage/Banner/Banner";
import bannerLocais from "../../assets/bannerLocais.png";

function Locais() {
  return (
    <>
      <Navbar />
      <Banner
        titulo="Encontre os melhores assessores para seu casamento"
        subtitulo="Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito."
        imagem={bannerLocais}
      />
        <Quadros />
      <Baseboard />
    </>
  );
}

export default Locais;

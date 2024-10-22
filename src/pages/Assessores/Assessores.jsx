import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Container from "../../componentes/ContainerPages/Container";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Assessores.module.css";
import { Quadros } from "../../componentes/QuadrosPortifolio/Quadros";

function Assessores() {
  return (
    <>
      <Navbar />
      <Container
        titulo="Encontre os melhores assessores para seu casamento"
        subtitulo="Explore nossos profissionais e encontre o assessor ideal para , planejar cada detalhe do seu dia perfeito."
      />
        <Quadros />
      <Baseboard />
    </>
  );
}

export default Assessores;

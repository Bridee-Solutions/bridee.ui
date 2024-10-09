import React from "react";
import talisma from "../../assets/talisma.png";
import denise from "../../assets/denise.png";
import malu from "../../assets/malu.png";
import vanessa from "../../assets/vanessa.png";
import estrela from "../../assets/estrela.png";
import line from "../../assets/line.png";
import styles from "./Quadros.module.css";
import Quadro from "./Quadro";

export const Quadros = () => {
  return (
    <div className={styles["quadros-container"]}>
      {/* <h2 className={styles["titulo-pagina"]}>Encontre os melhores assessores para seu casamento</h2>
      <p className={styles["descricao-pagina"]}>
        Experiência, profissionalismo e dedicação para tornar seu dia inesquecível. Escolha seu assessor ideal e comece a planejar cada detalhe do seu casamento.
      </p> */}

      <div className={styles["grid-quadros"]}>
        <Quadro 
          title="Talismã Assessoria" 
          image={talisma} 
          rating="4,9" 
          reviews="50" 
          location="São Bernardo do Campo, São Paulo" 
          description="Talismã é uma empresa planejadora, organizadora e executora de mais belas e emocionantes cerimônias de casamento."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Denise Monteiro - Assessoria" 
          image={denise} 
          rating="4,9" 
          reviews="50" 
          location="São Caetano do Sul, São Paulo" 
          description="Se quiser garantir tranquilidade durante todo o pré-casamento e a segurança de que tudo dará certo durante o dia da cerimônia, a dica é contratar o serviço cerimonial como o da Denise Monteiro."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Malu Pelegrini - Assessoria" 
          image={malu} 
          rating="4,9" 
          reviews="90" 
          location="Frei Caneca, São Paulo" 
          description="A Malu Pelegrini é especializada em planejar casamentos personalizados, trazendo uma experiência inesquecível para os noivos."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Vanessa Oliveira - Assessoria" 
          image={vanessa} 
          rating="4,8" 
          reviews="40" 
          location="São Paulo, SP" 
          description="Com uma vasta experiência no mercado, Vanessa Oliveira traz toda sua expertise para a organização de casamentos de alto padrão."
          estrela={estrela}
          line={line}
        />
      </div>
    </div>
  );
};

export default Quadros;

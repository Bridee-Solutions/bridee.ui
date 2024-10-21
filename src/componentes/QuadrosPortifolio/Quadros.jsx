import React from "react";
import talisma from "../../assets/talisma.png";
import denise from "../../assets/denise.png";
import malu from "../../assets/malu.png";
import vanessa from "../../assets/vanessa.png";
import accomplish from "../../assets/accomplish.png";
import malupelegrini from "../../assets/malupelegrini.png";
import estrela from "../../assets/estrela.svg";
import styles from "./Quadros.module.css";
import { Quadro } from "./Quadro";

export const Quadros = () => {
  const assessores = [
    {
      title: "Talismã Assessoria",
      image: talisma,
      rating: "4,9",
      reviews: "50",
      location: "São Bernardo do Campo, São Paulo",
      description: "Talismã Assessoria oferece serviços completos de planejamento e execução de casamentos, com uma equipe especializada em cerimônias memoráveis e únicas."
    },
    {
      title: "Denise Monteiro - Assessoria",
      image: denise,
      rating: "4,9",
      reviews: "50",
      location: "São Caetano do Sul, São Paulo",
      description: "Denise Monteiro é referência em organização de eventos, oferecendo um serviço de assessoria completo para garantir um casamento tranquilo e bem planejado."
    },
    {
      title: "Malu Pelegrini - Assessoria",
      image: malu,
      rating: "4,9",
      reviews: "90",
      location: "Frei Caneca, São Paulo",
      description: "Com foco na tranquilidade dos noivos, Malu Pelegrini cuida de todos os detalhes, garantindo que o dia do seu casamento seja perfeito e sem preocupações."
    },
    {
      title: "Vanessa Oliveira - Assessoria",
      image: vanessa,
      rating: "4,8",
      reviews: "40",
      location: "São Paulo, SP",
      description: "Vanessa Oliveira é especialista em transformar sonhos em realidade, oferecendo serviços personalizados de assessoria para casamentos inesquecíveis."
    },
    {
      title: "Accomplish Eventos",
      image: accomplish,
      rating: "4,9",
      reviews: "50",
      location: "Capão Redondo, São Paulo",
      description: "A Accomplish Eventos é conhecida por seu comprometimento em planejar cada detalhe do casamento, assegurando que o grande dia seja exatamente como você sonhou."
    },
    {
      title: "Malu Pelegrini - Assessoria",
      image: malupelegrini,
      rating: "4,9",
      reviews: "90",
      location: "Frei Caneca, São Paulo",
      description: "Com um serviço personalizado, Malu Pelegrini traz confiança e tranquilidade aos noivos, cuidando de cada etapa do planejamento de casamento."
    }
  ];

  return (
    <div className={styles.quadrosContainer}>
      <div className={styles.gridQuadros}>
        {assessores.map((assessor, index) => (
          <Quadro
            key={index}
            title={assessor.title}
            image={assessor.image}
            rating={assessor.rating}
            reviews={assessor.reviews}
            location={assessor.location}
            description={assessor.description}
            estrela={estrela}
          />
        ))}
      </div>
    </div>
  );
};

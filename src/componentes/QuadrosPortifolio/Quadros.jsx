import React from "react";
import talisma from "../../assets/talisma.png";
import denise from "../../assets/denise.png";
import malu from "../../assets/malu.png";
import vanessa from "../../assets/vanessa.png";
import accomplish from "../../assets/accomplish.png";
import malupelegrini from "../../assets/malupelegrini.png";
import estrela from "../../assets/estrela.svg";
import line from "../../assets/line.png";
import styles from "./Quadros.module.css";
import { Quadro } from "./Quadro";

export const Quadros = () => {
  return (
    <div className={styles["quadros-container"]}>
      <div className={styles["grid-quadros"]}>
        <Quadro 
          title="Talismã Assessoria" 
          image={talisma} 
          rating="4,9" 
          reviews="50" 
          location="São Bernardo do Campo, São Paulo" 
          description="Talismã é uma empresa planejadora, organizadora e executora de mais belas e emocionantes cerimônias de casamento. Com profissionais altamente especializados na arte de ser cerimonialista, essa equipe vai realizar seu sonho de uma forma única, especial e inesquecível. "
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Denise Monteiro - Assessoria" 
          image={denise} 
          rating="4,9" 
          reviews="50" 
          location="São Caetano do Sul, São Paulo" 
          description="Se quiser garantir tranquilidade durante todo o pré-casamento e a segurança de que tudo dará certo durante o dia da cerimônia, a dica é contratar o serviço cerimonial como o da Denise Monteiro Assessoria de Eventos, que garante não apenas encontrar os melhores fornecedores como também ser os olhos.."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Malu Pelegrini - Assessoria" 
          image={malu} 
          rating="4,9" 
          reviews="90" 
          location="Frei Caneca, São Paulo" 
          description="Se quiser garantir tranquilidade durante todo o pré-casamento e a segurança de que tudo dará certo durante o dia da cerimônia, a dica é contratar o serviço cerimonial como o da Denise Monteiro Assessoria de Eventos, que garante não apenas encontrar os melhores fornecedores como também ser os olhos..."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Vanessa Oliveira - Assessoria" 
          image={vanessa} 
          rating="4,8" 
          reviews="40" 
          location="São Paulo, SP" 
          description="Seu casamento é um dos dias mais importantes de sua vida, e estamos aqui para ajudar. Vamos garantir que ele também seja um dos eventos mais bonitos, relaxantes, e bem planejados que você, sua família e seus amigos já assistiram. A tarefa de organizar o casamento pode soar como algo simples de ser..."
          estrela={estrela}
          line={line}
        />

        <Quadro
          title="Accomplish Eventos Serviços e Produções"
          image={accomplish}
          rating="4,9"
          reviews="50"
          location="Capão Redondo, São Paulo"
          description="O dia do casamento é esperado com muita ansiedade, expectativas e sonhos !Sonho de dar tudo certo, nesse momento tão único e especial.E para isso que à Accomplish Eventos Serviços e Produções By Luciene Oliveira Assessoria e Cerimônial está aqui ,para auxiliar em cada detalhe, dando um horizonte do..."
          estrela={estrela}
          line={line}
        />

        <Quadro 
          title="Malu Pelegrini - Assessoria" 
          image={malupelegrini} 
          rating="4,9" 
          reviews="90" 
          location="Frei Caneca, São Paulo" 
          description="Para estar segura e tranquila no dia mais especial da sua vida, confie em uma profissional para cuidar de todos os detalhes do seu casamento. A assessora Malu Pelegrini, realiza um minucioso trabalho personalizado com os noivos de planejamento e organização do cerimonial e festa, permitindo que os..."
          estrela={estrela}
          line={line}
        />
      </div>
    </div>
  );
};

export default Quadros;

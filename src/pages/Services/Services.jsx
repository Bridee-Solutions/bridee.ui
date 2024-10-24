import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../componentes/Navbar/Navbar';
import Baseboard from '../../componentes/LandingPage/BaseBoard/Baseboard';
import banner1Agda from '../../assets/banner1Agda.png';
import banner2Agda from '../../assets/banner2Agda.png';
import banner3Agda from '../../assets/banner3.Agda.png';
import banner4Agda from '../../assets/banner4Agda.png';
import styles from './Services.module.css';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Conteúdo Principal */}
        <div className={styles.mainContent}>
          {/* Galeria de Imagens */}
          <div className={styles.imageGallery}>
            <img src={banner1Agda} alt="Imagem 1" className={styles.mainImage} />
            <div className={styles.smallImages}>
              <img src={banner2Agda} alt="Imagem 2" />
              <img src={banner3Agda} alt="Imagem 3" />
              <img src={banner4Agda} alt="Imagem 4" />
            </div>
          </div>

          {/* Detalhes do Serviço */}
          <div className={styles.detailsSection}>
            <h1>Agda Paula Assessoria</h1>
            <div className={styles.ratingReviews}>
              <span>⭐ 5.0 (44 avaliações)</span> — <span>Moema, São Paulo</span>
              <a href="#" className={styles.visitWebsite}>Visitar website</a>
            </div>

            <p className={styles.description}>
              Cada evento tratado como único e com a merecida atenção. Esta é a fórmula aplicada pela Agda Paula Assessoria & Cerimonial em cada casamento realizado e que vem colhendo bons frutos. Alinhando o carinho ao projeto dos noivos, esta profissional e equipe vêm contribuindo para o sucesso do grande dia.
            </p>

            <h2>Serviços oferecidos</h2>
            <ul>
              <li>Consultoria para casamentos</li>
              <li>Assessoria completa</li>
              <li>Coordenação de fornecedores</li>
              <li>Planejamento do evento</li>
            </ul>

            <h2>Forma de trabalho</h2>
            <p>
              A empresa realiza assessoria com meses de antecedência para evitar imprevistos e garantir a qualidade na prestação dos serviços.
            </p>
          </div>

          {/* Perguntas Frequentes */}
          <div className={styles.faqSection}>
            <h2>Perguntas frequentes</h2>

            <h3>Quais são os tamanhos dos casamentos para os quais trabalha?</h3>
            <div className={styles.gridContainer}>
              <p>Com menos de 100 convidados</p>
              <p>Entre 300 e 500 convidados</p>
              <p>Entre 100 e 300 convidados</p>
              <p>Mais de 500 convidados</p>
            </div>

            <h3>Que tipo de cerimônia organiza?</h3>
            <div className={styles.gridContainer}>
              <p>Religiosa</p>
              <p>Simbólica</p>
              <p>Civil</p>
              <p>Temática</p>
              <p>Ao ar livre</p>
              <p>Ecológica</p>
              <p>No exterior</p>
              <p>Outro (Somos capacitados a realizar quaisquer tipos de cerimônias de casamento)</p>
            </div>

            <h3>Organiza casamentos de religiões não católicas?</h3>
            <p>Sim</p>

            <h3>Em que tipo de casamentos está especializado?</h3>
            <p>Estilo americano, evangélico, espírita, católico e budista</p>

            <h3>Como é o seu estilo de trabalhar?</h3>
            <p>Organizado, planejado e pontual</p>

            <h3>Quais são as formas de pagamento?</h3>
            <p>Dinheiro, cheque ou depósito</p>
          </div>
        </div>

        {/* Formulário de Pedir Orçamento */}
        <div className={styles.contactForm}>
          <h2>Pedir orçamento</h2>
          <form>
            <div className={styles.detailsSection}>
              <label>Seus detalhes</label>
              
              <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input type="text" value="Amanda Geovanna" readOnly />
              </div>
              
              <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <input type="email" value="amandachandler@outlook.com" readOnly />
              </div>
              
              <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <input type="tel" placeholder="Telefone" />
              </div>
              
              <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                <input type="date" value="2026-02-11" />
              </div>
              
              <div className={styles.inputGroup}>
                <FontAwesomeIcon icon={faUsers} className={styles.icon} />
                <input type="number" placeholder="Convidados" />
              </div>
            </div>

            <textarea
              className={styles.messageBox}
              placeholder="Olá! Encontramos seu anúncio no bridee e gostaríamos de ter mais informação sobre seus serviços!"
            />

            <button type="submit" className={styles.submitButton}>
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
      <Baseboard />
    </>
  );
};

export default Services;

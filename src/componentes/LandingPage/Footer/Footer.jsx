import styles from "./Footer.module.css";
import Baseboard from "../BaseBoard/Baseboard";
import LogoFooter from "../LogoFooter/LogoFooter";
import Faq from "react-faq-component";
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const titleStyle = {
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#514343',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

const data = {
  rows: [
    {
      title: <span style={titleStyle}>Explorar</span>,
      content: (
        <div>
          <a href="#categories">Assessores</a>
          <a href="#wedding-planner">Ferramentas de planejamento</a>
        </div>
      ),
    },
    {
      title: <span style={titleStyle}>Sobre nós</span>,
      content: (
        <div>
          <p>Quem somos</p>
          <a href="#newsletter">Fale conosco</a>
          <a href="#faq">Perguntas frequentes</a>
        </div>
      ),
    },
    {
      title: <span style={titleStyle}>Contato</span>,
      content: (
        <div>
          <p>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ae6261", marginRight: '0.6rem'}}
            />
            Rua Haddock Lobo, 595 - São Paulo
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ae6261", marginRight: '0.5rem'}} />
            Telefone: +55 (11) 999999-9999 
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ae6261", marginRight: '0.5rem'}} />
            E-mail: concate@bridee.com
          </p>
        </div>
      ),
    },
    {
      title: (
        <a href="#header" style={titleStyle}>
          Voltar ao topo
        </a>
      ),
      content: null,
    }
  ],
};

const RedesSociais = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
    <div style={circleStyle}>
      <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
    </div>
    <div style={circleStyle}>
      <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
    </div>
    <div style={circleStyle}>
      <FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} />
    </div>
    <div style={circleStyle}>
      <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white' }} />
    </div>
  </div>
);

const circleStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#e39595',
};

const style = {
  bgColor: "#fff6f6",
  rowTitleColor: "#000000",
  // rowContentColor: 'red',
  arrowColor: "#ED9C9B",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 360);
  //   };
 
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
    };
  
    const arrow = document.querySelector('.faq .row:last-child .arrow');
    const row = document.querySelector('.faq .row:last-child');
  
    if (arrow && row) {
      row.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        window.location.href = '#header'; 
      });
    }
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      if (row) {
        row.removeEventListener('click', () => {});
      }
    };
  }, []);
  
  
  return (
    <section className={styles.Footer}>
      {isMobile ? (
        <div className={styles.mobileFooter}>
          <Faq data={data} styles={style} config={config} />
          <div className={styles.iconsRedesSociais}>
            <RedesSociais />
          </div>
          <LogoFooter />
          <Baseboard />
        </div> 
      ) : (
      <div className={styles.footer_sections}>
        <div className={styles.footer_reg}>
          <div className={styles.containerDireita}>
            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Explorar</span>
                </div>
                <div className={styles.containerOpcoes}>
                  <a href="#wedding-planner">Quem Assessores</a>
                  <a href="#benefits">Ferramentas de planejamento</a>
                  <a href="#categories">Fornecedores</a>
                </div>
              </div>
            </div>

            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Sobre</span>
                </div>
                <div className={styles.containerOpcoes}>
                  <span className="opcoesPadroes">Quem somos</span>
                  <a href="#newsletter">Fale conosco</a>
                  <a href="#faq">Perguntas Frequentes</a>
                </div>
              </div>
            </div>

            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Contato</span>
                </div>
                <div className={styles.containerOpcoes}>
                  <div className={styles.containerItem}>
                    <div className={styles.containerIcon}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className={styles.icon}
                      />
                    </div>
                    <div className={styles.item}>
                      <span>R. Haddock Lobo, 595 - SP </span>
                    </div>
                  </div>
                  <div className={styles.containerItem}>
                    <div className={styles.containerIcon}>
                      <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                      <span>Telefone: +55 (11) 999999-9999</span>
                    </div>
                  </div>
                  <div className={styles.containerItem}>
                    <div className={styles.containerIcon}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.icon}
                      />
                    </div>
                    <div className={styles.item}>
                      <span>E-mail: contato@bridee.com </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
          <div className={styles.linha}></div>
          </div>
          <LogoFooter />
        </div>
        <Baseboard />
      </div>
     )}
    </section>
  );
}

export default Footer;

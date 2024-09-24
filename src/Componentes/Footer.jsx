import React from "react";
import styles from "../css/Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Explorar</h4>
          <ul className={styles.footerList}>
            <li><a href="#">Assessores</a></li>
            <li><a href="#">Ferramentas de planejamento</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Sobre</h4>
          <ul className={styles.footerList}>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Contato</h4>
          <ul className={styles.footerList}>
            <li>Rua Haddock Lobo, 595 - São Paulo</li>
            <li>Telefone: +55 (11) 99999-9999</li>
            <li>E-mail: contato@bridee.com</li>
          </ul>
        </div>
       
        <div className={styles.separator}></div>
       
        <div className={styles.footerLogo}>
          <h1 className={styles.footerBrand}>
            <span>bridee</span><span className={styles.dot}>.</span>
          </h1>
          <p className={styles.footerDescription}>
            O match perfeito para o dia dos seus sonhos
          </p>
        </div>
      </div>

      
      <div className={styles.footerBottom}>
        <p>© 2024 bridee. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

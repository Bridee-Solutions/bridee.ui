import styles from "./Footer.module.css";
import Baseboard from "../BaseBoard/Baseboard";
import Faq from "react-faq-component";

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
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faPhone,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faFacebookF,
  faEnvelope,
  faLocationDot
);

const data = {
  rows: [
    {
      title: "Explorar",
      content: (
        <div>
          <p>Assessores</p>
          <p>Ferramentas de planejamento</p>
        </div>
      ),
    },
    {
      title: "Sobre nós",
      content: (
        <div>
          <p>Quem somos</p>
          <p>Fale conosco</p>
          <p>Perguntas frequentes</p>
        </div>
      ),
    },
    {
      title: "Contato",
      content: (
        <div>
          <p>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ae6261" }}
            />
            Rua Haddock Lobo, 595 - São Paulo
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ae6261" }} />
            Telefone: +55 (11) 999999-9999
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ae6261" }} />
            E-mail: concate@bridee.com
          </p>
        </div>
      ),
    },
    {
      title: "Voltar ao topo",
    },
  ],
};

const style = {
  bgColor: "#F5F1DF",
  rowTitleColor: "#000000",
  // rowContentColor: 'grey',
  arrowColor: "#CE8A89",
  rowTitleTextSize: "24px",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function Footer() {
  return (
    <section className={styles.Footer}>
      <div className={styles.footer_sections}>
        <div className={styles.footer_reg}>
          <div className={styles.containerDireita}>
            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Explorar</span>
                </div>
                <div className={styles.containerOpcoes}>
                  <span>Quem Assessores</span>
                  <span>Ferramentas de planejamento</span>
                  <span>Fornecedores</span>
                </div>
              </div>
            </div>

            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Sobre</span>
                </div>
                <div className={styles.containerOpcoes}>
                  <span>Quem somos</span>
                  <span>Fale conosco</span>
                  <span>Perguntas Frequentes</span>
                </div>
              </div>
            </div>

            <div className={styles.containerColuna}>
              <div className={styles.containerBox}>
                <div className={styles.containerTitulo}>
                  <span>Explorar</span>
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

          <div class={styles.container}>
            <div class={styles.linha}></div>
          </div>

          <div className={styles.containerEsquerda}>
            <div className={styles.footer_logo}>
              <div className={styles.container_logo}>
                <span>
                  bridee<b>.</b>
                </span>
              </div>
              <div className={styles.container_subtitulo}>
                <span>O match perfeito para o dia dos seus sonhos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Baseboard />
    </section>
  );
}

export default Footer;

import styles from './Footer.module.css'
import Baseboard from '../BaseBoard/Baseboard';
import Faq from "react-faq-component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPhone, faInstagram, faLinkedin, faXTwitter, faFacebookF, faEnvelope, faLocationDot);

const data = {
    rows: [
        {
            title: "Explorar",
            content:<div>
            <p>Assessores</p>
            <p>Ferramentas de planejamento</p>
            </div>,
        },
        {
            title: "Sobre nós",
            content:
            <div>
            <p>Quem somos</p>
            <p>Fale conosco</p>
            <p>Perguntas frequentes</p>
            </div>,
        },
        {
            title: "Contato",
            content:     
            <div>
            <p>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ae6261' }} />
            Rua Haddock Lobo, 595 - São Paulo
            </p>
            <p>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#ae6261' }} />
            Telefone: +55 (11) 999999-9999
            </p>
            <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ae6261' }} />
            E-mail: concate@bridee.com
            </p>
            </div>,
        },
        {
            title: "Voltar ao topo"
        }
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
    tabFocus: true
};


function Footer() {
    return (
        <section className={styles.Footer}>
        <div className={styles.footer_sections}>
        <div className={styles.footer_mobile}>
        <div className={styles.faq}>
            <Faq
            data={data}
            styles={style}
            config={config}
            />    
        </div>
        <div className={styles.footer_social_media}>
        <div><FontAwesomeIcon icon={faLinkedin} size='2xl'/></div>
        <div><FontAwesomeIcon icon={faInstagram} size='2xl'/></div>
        <div><FontAwesomeIcon icon={faFacebookF} size='2xl'/></div>
        <div><FontAwesomeIcon icon={faXTwitter} size='2xl'/></div>
        </div>
        
        <h1 className={styles.footer_title}>bridee<b>.</b></h1>
        </div>
        
        <div className={styles.footer_explore}>
        <h2>Explorar</h2>
        <div>
        <p>Assessores</p>
        <p>Ferramentas de planejamento</p>
        </div>
        </div>
        <div className={styles.footer_about}>
        <h2>Sobre</h2>
        <div>
        <p>Quem somos</p>
        <p>Fale conosco</p>
        <p>Perguntas frequentes</p>
        </div>
        </div>
        
        <div className={styles.footer_contact}>
        <h2>Contato</h2>
        <div>
        
        <p>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ae6261' }} />
        Rua Haddock Lobo, 595 - São Paulo
        </p>
        <p>
        <FontAwesomeIcon icon={faPhone} style={{ color: '#ae6261' }} />
        Telefone: +55 (11) 999999-9999
        </p>
        <p>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ae6261' }} />
        E-mail: concate@bridee.com
        </p>
        </div>
        </div>
        
        <div className={styles.footer_div}></div>
        
        <div className={styles.footer_logo}>
        <h1 className={styles.footer_title}>bridee<b>.</b></h1>
        <h3 className={styles.footer_subtitle}>O match perfeito para o dia dos seus sonhos</h3>
        </div>
        </div>
        <Baseboard/>
        </section>
    );
}

export default Footer;
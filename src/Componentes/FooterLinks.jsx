import PropTypes from "prop-types";
import "../css/FooterLinks.module.css";

const FooterLinks = ({ className = "" }) => {
  return (
    <section className={`${styles.footerLinks} ${className}`}>
      <div className={Styles.footer1} />
      <div className={styles.exploreColumn}>
        <div className={styles.exploreLinks}>
          <div className={styles.explorar}>Explorar</div>
          <div className={styles.assessorsLink}>
            <div className={styles.assessores}>Assessores</div>
          </div>
          <div className={styles.toolsLink}>
            <div className={styles.ferramentasDePlanejamento}>
              Ferramentas de planejamento
            </div>
          </div>
        </div>
        <div className={styles.aboutColumn}>
          <div className={styles.aboutLink}>
            <div className={styles.sobre}>Sobre</div>
          </div>
          <div className={styles.teamLink}>
            <div className={styles.assessores}>Quem somos</div>
          </div>
          <div className={styles.contactLink}>
            <div className={styles.assessores}>Fale conosco</div>
          </div>
          <div className={styles.perguntasFrequentes2}>Perguntas frequentes</div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.brideeInfo}>
          <h1 className={styles.bridee1}>
            <span>bridee</span>
            <span className={styles.span1}>.</span>
          </h1>
        </div>
        <div className={styles.oMatchPerfeito1}>
          O match perfeito para o dia dos seus sonhos
        </div>
      </div>
      <div className={styles.footerLinksChild} />
      <img
        className={styles.fluentcall24FilledIcon}
        loading="lazy"
        alt=""
        src="/fluentcall24filled@2x.png"
      />
      <div className={styles.contactInfo}>
        <div className={styles.contactTitle}>
          <div className={styles.sobre}>Contato</div>
        </div>
        <div className={styles.addressEmail}>
          <div className={styles.address}>
            <div className={styles.locationIcon}>
              <img
                className={styles.iconParkSolidlocalTwo}
                loading="lazy"
                alt=""
                src="/iconparksolidlocaltwo@2x.png"
              />
            </div>
            <div className={styles.ruaHaddockLobo595SoPaParent}>
              <div className={styles.ruaHaddockLoboContainer}>
                <p className={styles.ruaHaddockLobo}>
                  Rua Haddock Lobo, 595 - São Paulo
                </p>
              </div>
              <div className={styles.ruaHaddockLoboContainer}>
                <p className={styles.ruaHaddockLobo}>
                  Telefone: +55 (11) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.locationIcon}>
            <img
              className={styles.materialSymbolsLightstackedIcon}
              loading="lazy"
              alt=""
              src="/materialsymbolslightstackedemail.svg"
            />
          </div>
          <div className={styles.emailContatobrideecom}>
            <p className={styles.ruaHaddockLobo}>E-mail: contato@bridee.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;

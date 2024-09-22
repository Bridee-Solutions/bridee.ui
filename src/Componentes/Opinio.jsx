import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/Opinio.module.css";

const Opinio = ({
  className = "",
  bxsquoteLeft,
  bxsquoteLeft1,
  image,
  propPadding,
  isabelaCambui,
  noiva,
  group8,
  descrioDeQuemTop,
}) => {
  const clientNameContainersStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`${styles.opinio3} ${className}`}>
      <div className={styles.opinio3Child} />
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        porttitor non eros at auctor. Aliquam erat volutpat. Pellentesque ante
        diam, accumsan vitae est sed, suscipit consequat metus.
      </div>
      <img
        className={styles.bxsquoteLeftIcon}
        loading="lazy"
        alt=""
        src={bxsquoteLeft}
      />
      <div className={styles.quoteIconContainers}>
        <div className={styles.quoteIconInnerContainers}>
          <img className={styles.bxsquoteLeftIcon1} alt="" src={bxsquoteLeft1} />
          <div className={styles.clientInfoContainers}>
            <div className={styles.clientInfoInnerContainers}>
              <img className={styles.imageIcon4} alt="" src={image} />
              <div
                className={styles.clientNameContainers}
                style={clientNameContainersStyle}
              >
                <div className={styles.clientNameInnerContainers}>
                  <div className={styles.isabelaCambui}>{isabelaCambui}</div>
                  <div className={styles.noiva1}>{noiva}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.opinio3Item} alt="" src={group8} />
    </div>
  );
};

Opinio.propTypes = {
  className: PropTypes.string,
  bxsquoteLeft: PropTypes.string,
  bxsquoteLeft1: PropTypes.string,
  image: PropTypes.string,
  isabelaCambui: PropTypes.string,
  noiva: PropTypes.string,
  group8: PropTypes.string,

  /**   estilos props */
  propPadding: PropTypes.any,
  descrioDeQuemTop: PropTypes.any,
};

export default Opinio;

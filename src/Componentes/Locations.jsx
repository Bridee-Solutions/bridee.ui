import React from "react";
import PropTypes from "prop-types";
import styles from "../css/Locations.module.css";

const locations = [
  {
    id: 1,
    imgSrc: "/Assets/praia.png",
    alt: "Casamento na praia",
    title: "Casamento na praia",
  },
  {
    id: 2,
    imgSrc: "/Assets/aoarlivre.png",
    alt: "Casamento ao ar livre",
    title: "Casamento ao ar livre",
  },
  {
    id: 3,
    imgSrc: "/Assets/igreja.png",
    alt: "Casamento na igreja",
    title: "Casamento na igreja",
  },
  {
    id: 4,
    imgSrc: "/Assets/resort.png",
    alt: "Casamento em resorts",
    title: "Casamento em resorts",
  },
];

const Locations = ({ className = "" }) => {
  return (
    <section className={`${styles.locationsSection} ${className}`}>
      <h2 className={styles.title}>
        Encontre o local perfeito para seu casamento
      </h2>

      <div className={styles.locationsContainer}>
        {locations.map((location) => (
          <div key={location.id} className={styles.locationCard}>
            <img
              src={location.imgSrc}
              alt={location.alt}
              className={styles.locationImage}
            />
            <p className={styles.locationTitle}>{location.title}</p>
          </div>
        ))}
      </div>

      <button className={styles.viewAllButton}>
            Ver todos os estilos 
            <img src="/Assets/seta.png" alt="Seta" />
                </button>

    </section>
  );
};

Locations.propTypes = {
  className: PropTypes.string,
};

export default Locations;

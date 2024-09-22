import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Venue.module.css';

const Venue = ({ venueImage, venueTitle }) => {
  return (
    <section className={styles.venue}>
      <div className={styles.venueContent}>
        <h2>{venueTitle || 'Encontre o Local Perfeito'}</h2>
        {venueImage && (
          <img
            className={styles.imageIcon}
            src={venueImage}
            alt="Imagem do local"
          />
        )}
      </div>
    </section>
  );
};

Venue.propTypes = {
  venueImage: PropTypes.string, 
  venueTitle: PropTypes.string,
};

export default Venue;

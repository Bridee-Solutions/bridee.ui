import React from 'react';
import styles from '../css/WeddingLocations.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import OutdoorLocation from '../assets/outdoor_location.svg';
import BeachLocation from '../assets/beach_location.svg';
import ChurchLocation from '../assets/church_location.svg';
import ResortsLocation from '../assets/resorts_location.svg';

library.add(faArrowRight);

function WeddingLocations() {
  return (
    <section className={styles.wedding_locations}>
      <h1>Encontre o local perfeito para seu casamento</h1>
      <div className={styles.container}>
        <div className={styles.location}>
          <img src={BeachLocation} alt="" />
          <p>Casamento na praia</p>
        </div>

        <div className={styles.location}>
          <img src={OutdoorLocation} alt="" />
          <p>Casamento ao ar livre</p>
        </div>

        <div className={styles.location}>
          <img src={ChurchLocation} alt="" />
          <p>Casamento na igreja</p>
        </div>

        <div className={styles.location}>
          <img src={ResortsLocation} alt="" />
          <p>Casamento em resorts</p>
        </div>
      </div>
      <div className={styles.button_area}>
        <button>
          Ver todos os estilos
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>
      </div>
    </section>
  );
}

export default WeddingLocations;
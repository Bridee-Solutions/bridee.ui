import React from 'react';
import styles from '../css/Locations.module.css';

const Locations = () => {
  const locations = [
    { name: 'Casamento na praia', imageUrl: '/Assets/praia.png' },
    { name: 'Casamento ao ar livre', imageUrl: '/Assets/aoarlivre.png' },
    { name: 'Casamento na igreja', imageUrl: '/Assets/igreja.png' },
    { name: 'Casamento em resorts', imageUrl: '/Assets/resort.png' }
  ];

  return (
    <section className={styles.locations}>
      <h2>Encontre o local perfeito para seu casamento</h2>
      <div className={styles.locationList}>
        {locations.map((location) => (
          <div className={styles.location} key={location.name}>
            <img src={location.imageUrl} alt={location.name} />
            <p>{location.name}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewAll}>Ver todos os estilos</button>
    </section>
  );
};

export default Locations;

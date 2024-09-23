import React from 'react';
import styles from '../css/Services.module.css';

const Services = () => {
  const services = [
    { name: 'Fotos & Vídeo', icon: '/Assets/camera.png' },
    { name: 'Local', icon: '/Assets/local.png' },
    { name: 'Música', icon: '/Assets/music.png' },
    { name: 'Bolo', icon: '/Assets/bolodecasamento.png' },
    { name: 'Decoração', icon: '/Assets/decoracao.png' },
    { name: 'Gastronomia', icon: '/Assets/restaurante.png' },
    { name: 'Noiva', icon: '/Assets/vestidodecasamento-1-1@2x.png' },
    { name: 'Noivo', icon: '/Assets/camisa.png' }
  ];

  return (
    <section className={styles.services}>
      <h2>Descubra fornecedores de casamento por categoria</h2>
      <div className={styles.serviceIcons}>
        {services.map((service, index) => (
          <div className={styles.service} key={index}>
            <img src={service.icon} alt={service.name} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

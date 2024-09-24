import React, { useState, useCallback } from 'react';
import styles from '../css/Dresses.module.css'; // Importa o módulo CSS

const Dresses = () => {
  // Estado para armazenar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState('/Assets/vestido1.png');

  // Função para lidar com o clique nas imagens
  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  // Lista de imagens dos vestidos
  const dresses = [
    { id: 1, src: '/Assets/vestido1.png', alt: 'Vestido 1' },
    { id: 2, src: '/Assets/vestido2.png', alt: 'Vestido 2' },
    { id: 3, src: '/Assets/vestido3.png', alt: 'Vestido 3' },
    { id: 4, src: '/Assets/vestido4.png', alt: 'Vestido 4' },
    { id: 5, src: '/Assets/vestido5.png', alt: 'Vestido 5' },
  ];

  return (
    <section className={styles.dressesSection}>
      {/* Texto à esquerda */}
      <div className={styles.textContainer}>
        <h2>Explore nossa seleção de vestidos de noiva</h2>
        <p className={styles.descriptionText}>
          Desde o clássico ao moderno, temos o vestido ideal para você.
        </p>
        <button className={styles.button}>
          Buscar vestidos <span>&#8594;</span>
        </button>
      </div>

      {/* Imagem selecionada em destaque */}
      <div>
        <img
          src={selectedImage}
          alt="Imagem selecionada"
          className={styles.selectedImage} // Aplicando classe do CSS Module
        />
      </div>

      {/* Carrossel de imagens à direita */}
      <div className={styles.dressCarousel}>
        {dresses.map((dress) => (
          <img
            key={dress.id}
            src={dress.src}
            alt={dress.alt}
            className={styles.dressItem} // Aplicando classe do CSS Module
            onClick={() => handleImageClick(dress.src)}
          />
        ))}
      </div>
    </section>
  );
};

export default Dresses;

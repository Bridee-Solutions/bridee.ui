import React from 'react';
import styles from '../css/WeddingLocations.module.css'

const locations = [
  { name: "Casamento na praia", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e89309f83cdc860e2957ce3e17f0da539b1042e11187c9d889df3bd3549c7cb1?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Casamento ao ar livre", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1accd7a9a05dfeaeae643c9542c7a7232babb602cb87c344e89b5fff95cf4c4?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Casamento na igreja", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dc874e290fa13d764082fe4348817998f5bac3b781340a19e987cc58eb0002f?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Casamento em resorts", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5db05d2a4ea380c351b7e2158b42e68e8adddc1e50b37f30be4832eb170e2f8?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" }
];

function WeddingLocations() {
  return (
    <section className={styles.wedding_locations}>
      <h2 className={styles.section_title}>Encontre o local perfeito para seu casamento</h2>
      <div className={styles.location_grid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.location_card}>
            <img src={location.imageSrc} alt={location.name} className={styles.location_image} />
            <p className={styles.location_name}>{location.name}</p>
          </div>
        ))}
      </div>
      <button className={styles.view_all_button}>
        Ver todos os estilos
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b01bd7c554b60f2b24ce5abbb685142142fe95ada45489fb98633c413a594552?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.arrow_icon} />
      </button>
      
    </section>
  );
}

export default WeddingLocations;
import React from 'react';
import styles from '../css/Features.module.css';

const featureData = [
  {
    title: "Calcule os custos do seu casamento conforme suas escolhas.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/965b01a44b8a87930e4bc671e4c7c71ea2f2b209d5da633e5801f2eb60df4860?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7",
    alt: "Calculadora de custos"
  },
  {
    title: "Encontre os melhores assessores para o seu grande dia.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e627cf5055571eb9d78735e386bad24c8dc5cc8339675c468b86279a2b1b6590?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7",
    alt: "Assessores de casamento"
  },
  {
    title: "Gerencie e confirme presenças facilmente.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/383c1587ef19bef78788d9488db04faff041e6463f4ec775508a66ec71834604?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7",
    alt: "Gerenciamento de convidados"
  },
  {
    title: "Importe inspirações do Pinterest para o seu planejamento.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e88f39dc4120d92151946b0f8a7f3b93d0bcbfb738a81cd4d49ff7e67bf6472d?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7",
    alt: "Inspirações do Pinterest"
  }
];

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.main_feature}>
        <h2 className={styles.main_feature_title}>Planeje seu casamento de forma simples e prática com a bridee.</h2>
        <button className={styles.start_button}>
          Comece agora
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcdfb2fcd041090b7b0c62a3743f284caf75785d69627015a8b6bc1984756e7e?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.arrow_icon}/>
        </button>
      </div>
      {featureData.map((feature, index) => (
        <div key={index} className={styles.feature_card}>
          <img src={feature.imageSrc} alt={feature.alt} className={styles.feature_icon} />
          <p className={styles.feature_description}>{feature.title}</p>
        </div>
      ))}
      
    </section>
  );
}

export default Features;
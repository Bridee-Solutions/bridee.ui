import styles from "./UserReviews.module.css";

import abreAspas from "../../../assets/abre_aspas.svg";
import fechaAspas from "../../../assets/fecha_aspas.svg";
import star from "../../../assets/star.svg";
import user_bride from "../../../assets/Isabela_cambui_photo.svg";
import user_advisor from "../../../assets/Aghata_paula_photo.svg";
import user_groom from "../../../assets/Enzo_martins_photo.svg";
import { useState } from "react";

function UserReviews() {
  const testimonials = [
    {
      id: 1,
      text: `Usar a Bridee foi a melhor\n escolha! A plataforma\n simplificou o caos que é\norganizar um casamento e nos\nconectou com fornecedores\nmaravilhosos. Super\nrecomendo!`,
      name: "Isabela Cambui",
      role: "Noiva",
      image: user_bride,
    },
    {
      id: 2,
      text: `Nunca pensei que planejar\no casamento pudesse ser\ntão fácil. A Bridee nos ajudou\na encontrar o\nassessor certo e a manter\ntudo em ordem, sem\nestresse. Sensacional!`,
      name: "Enzo Martins",
      role: "Noivo",
      image: user_groom,
    },
    {
      id: 3,
      text: `A Bridee foi uma mão na roda!\nEncontramos o assessor\nperfeito em poucos cliques, e\nele cuidou de tudo. Fiquei\n muito mais tranquila sabendo\n que cada detalhe estava\n sendo organizado por lá.`,
      name: "Aghata Paula",
      role: "Assessora",
      image: user_advisor,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.user_reviews}>
      <div className={styles.containerReview}>
        <div className={styles.containerTitulo}>
          <span>Avaliações dos nossos usuários</span>
        </div>

        <div className={styles.container}>
           <div className={styles.containerReg}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.backgroundAvaliacao}>
                <div className={styles.containerAvaliacao}>
                  <div className={styles.conteudoAvaliacao}>
                    <div className={styles.containerSuperior}>
                      <img src={abreAspas} className={styles.aspas} />
                    </div>
                    <div className={styles.containerMeio}>
                      <div className={styles.contMei}>
                        <span>{testimonial.text}</span>
                      </div>
                    </div>
                    <div className={styles.containerInferior}>
                      <img src={fechaAspas} className={styles.aspas} />
                    </div>
                  </div>
                  <div className={styles.conteinerUsuario}>
                    <div className={styles.contimg}>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className={styles.containerInfos}>
                      <div className={styles.containerDesc}>
                        <span className={styles.nome}>{testimonial.name}</span>
                        <span>{testimonial.role}</span>
                      </div>
                      <div className={styles.stars}>
                        {[...Array(5)].map((_, index) => (
                          <img key={index} src={star} alt="star" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <div className={styles.backgroundAvaliacao}>
            <div className={styles.containerAvaliacao}>
              <div className={styles.containerSuperior}>
                <img src={abreAspas} className={styles.aspas} />
              </div>
              <div className={styles.containerMeio}>
                <div className={styles.contMei}>
                  <span>{testimonials[currentIndex].text}</span>
                </div>
              </div>
              <div className={styles.containerInferior}>
                <img src={fechaAspas} className={styles.aspas} />
              </div>
            </div>
            <div className={styles.conteinerUsuario}>
              <div className={styles.contimg}>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                />
              </div>
              <div className={styles.containerInfos}>
                <div className={styles.containerDesc}>
                  <span className={styles.nome}>{testimonials[currentIndex].name}</span>
                  <span>{testimonials[currentIndex].role}</span>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src={star} alt="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navigationButtons}>
            <button onClick={prevReview}>Anterior</button>
            <button onClick={nextReview}>Próximo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserReviews;

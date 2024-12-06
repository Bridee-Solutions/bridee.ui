import styles from "./UserReviews.module.css";

import abreAspas from "../../../assets/abre_aspas.svg";
import fechaAspas from "../../../assets/fecha_aspas.svg";
import star from "../../../assets/star.svg";
import user_bride from "../../../assets/Isabela_cambui_photo.svg";
import user_advisor from "../../../assets/Aghata_paula_photo.svg";
import user_groom from "../../../assets/Enzo_martins_photo.svg";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  const [isMobileView, setIsMobileView] = useState(false); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 360);
    };
  
    updateView(); 
  
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  useEffect(() => {
    if (isClient && isMobileView) {
      setTimeout(() => {
        const swiperContainer = document.querySelector(".swiper");
        swiperContainer?.swiper?.update();
        console.log("Swiper atualizado:", swiperContainer?.swiper);
      }, 100);
    }
  }, [isClient, isMobileView]);


  return (
    <section className={styles.user_reviews}>
      <div className={styles.containerReview}>
        <div className={styles.containerTitulo}>
          <span>Avaliações dos nossos usuários</span>
        </div>

        <div className={styles.container}>
          {isClient && isMobileView ? (
            // Exibição MOBILE (Swiper)
            <div className={styles.carouselContainer}>
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{clickable: true}}
                style={{width: '100%', overflow: 'hidden'}}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className={styles.backgroundAvaliacao}>
                      <div className={styles.containerAvaliacao}>
                        <div className={styles.containerSuperior}>
                          <img
                            src={abreAspas}
                            className={styles.aspas}
                            alt="Aspas Abertas"
                          />
                        </div>
                        <div className={styles.containerMeio}>
                          <div className={styles.contMei}>
                            <span>{testimonial.text}</span>
                          </div>
                        </div>
                        <div className={styles.containerInferior}>
                          <img
                            src={fechaAspas}
                            className={styles.aspas}
                            alt="Aspas Fechadas"
                          />
                        </div>
                      </div>
                      <div className={styles.conteinerUsuario}>
                        <div className={styles.contimg}>
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className={styles.containerInfos}>
                          <div className={styles.containerDesc}>
                            <span className={styles.nome}>
                              {testimonial.name}
                            </span>
                            <span>{testimonial.role}</span>
                          </div>
                          <div className={styles.stars}>
                            {[...Array(5)].map((_, index) => (
                              <img key={index} src={star} alt="Estrela" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          ) : (
            // Exibição DESKTOP (lista estática)
            <div className={styles.containerReg}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={styles.backgroundAvaliacao}
                >
                  <div className={styles.containerAvaliacao}>
                    <div className={styles.conteudoAvaliacao}>
                      <div className={styles.containerSuperior}>
                        <img
                          src={abreAspas}
                          className={styles.aspas}
                          alt="Aspas Abertas"
                        />
                      </div>
                      <div className={styles.containerMeio}>
                        <div className={styles.contMei}>
                          <span>{testimonial.text}</span>
                        </div>
                      </div>
                      <div className={styles.containerInferior}>
                        <img
                          src={fechaAspas}
                          className={styles.aspas}
                          alt="Aspas Fechadas"
                        />
                      </div>
                    </div>
                    <div className={styles.conteinerUsuario}>
                      <div className={styles.contimg}>
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className={styles.containerInfos}>
                        <div className={styles.containerDesc}>
                          <span className={styles.nome}>
                            {testimonial.name}
                          </span>
                          <span>{testimonial.role}</span>
                        </div>
                        <div className={styles.stars}>
                          {[...Array(5)].map((_, index) => (
                            <img key={index} src={star} alt="Estrela" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserReviews;

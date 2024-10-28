import styles from "./WeddingDresses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import weddingDress1 from "../../../assets/card_dress1.svg";
import weddingDress2 from "../../../assets/card_dress2.svg";
import weddingDress3 from "../../../assets/card_dress3.svg";
import weddingDress4 from "../../../assets/card_dress4.svg";
import weddingDress5 from "../../../assets/card_dress5.svg";

import { EffectCoverflow, Autoplay } from "swiper/modules";
library.add(faArrowRight);

function WeddingDresses() {
  return (
    <section className={styles.wedding_dresses}>
      <div className={styles.context}>
        <div className={styles.containerTexto}>
          <span>Explore nossa seleção de </span>
          <span>vestidos de noiva</span>
        </div>
        <div className={styles.containerDescricao}>
          <span>Desde o clássico ao moderno, temos o</span>
          <span> vestido ideal para você.</span>
        </div>
        <div className={styles.containerBotao}>
          <div>
            <button>
              Buscar vestidos
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container_images}>
        <div className={styles.containerVest}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={2} // Exibir 1 slide por vez
            spaceBetween={0} // Ajuste o valor para o espaçamento desejado
            autoplay={{
              delay: 3000, // Tempo em milissegundos antes de mudar para o próximo slide
              disableOnInteraction: false, // Não desativar autoplay após interação
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 75,
              modifier: 5,
            }}
            modules={[EffectCoverflow, Autoplay]} // Adiciona o módulo Autoplay
            onSlideChange={(swiper) => {
              swiper.slides.forEach((slide, index) => {
                if (index < swiper.activeIndex) {
                  slide.classList.add("hiddenImage");
                } else {
                  slide.classList.remove("hiddenImage");
                  slide.classList.add("visibleImage");
                }
              });
            }}
          >
            <SwiperSlide>
              <img
                src={weddingDress1}
                alt="Vestido 1"
                style={{ height: "60vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={weddingDress2}
                alt="Vestido 2"
                style={{ height: "60vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={weddingDress3}
                alt="Vestido 3"
                style={{ height: "60vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={weddingDress4}
                alt="Vestido 4"
                style={{ height: "60vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={weddingDress5}
                alt="Vestido 5"
                style={{ height: "60vh" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WeddingDresses;

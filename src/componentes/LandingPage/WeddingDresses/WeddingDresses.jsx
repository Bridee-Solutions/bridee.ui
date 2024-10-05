import styles from "./WeddingDresses.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import weddingDress1 from '../../../assets/card_dress1.svg';
import weddingDress2 from '../../../assets/card_dress2.svg';
import weddingDress3 from '../../../assets/card_dress3.svg';
import weddingDress4 from '../../../assets/card_dress4.svg';
import weddingDress5 from '../../../assets/card_dress5.svg';

import { EffectCoverflow } from "swiper/modules";
library.add(faArrowRight);

function WeddingDresses() {
    return (
      <section className={styles.wedding_dresses}>
        <div className={styles.context}>
            <h1>Explore nossa seleção de vestidos de noiva</h1>
            <p>Desde o clássico ao moderno, temos o  <br/> vestido ideal para você.</p>
            <button>
                Buscar vestidos
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </div>
        <div className={styles.container_images}>
              <Swiper
              effect={'coverflow'}
              grabCursor={true}
              loop={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={
                {
                  rotate: 0,
                  stretch: 0,
                  depth:75,
                  modifier: 5
                }
              }
              modules={[EffectCoverflow]}
              >
                <SwiperSlide>
                  <img src={weddingDress1} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={weddingDress2} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={weddingDress3} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={weddingDress4} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={weddingDress5} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
              </Swiper>
        </div>
      </section>
    );
  }
  
  export default WeddingDresses;
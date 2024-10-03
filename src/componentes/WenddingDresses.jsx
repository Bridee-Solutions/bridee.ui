import React from "react";
import styles from "../css/WenddingDresses.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import wenddingDress1 from '../assets/card_dress1.svg';
import wenddingDress2 from '../assets/card_dress2.svg';
import wenddingDress3 from '../assets/card_dress3.svg';
import wenddingDress4 from '../assets/card_dress4.svg';
import wenddingDress5 from '../assets/card_dress5.svg';

import { EffectCoverflow } from "swiper/modules";
library.add(faArrowRight);

function WeddingDresses() {
    return (
      <section className={styles.wendding_dresses}>
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
                  <img src={wenddingDress1} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={wenddingDress2} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={wenddingDress3} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={wenddingDress4} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={wenddingDress5} alt="" style={{height: '60vh'}}/>
                </SwiperSlide>
              </Swiper>
        </div>
      </section>
    );
  }
  
  export default WeddingDresses;
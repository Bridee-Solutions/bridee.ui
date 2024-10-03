import React from "react";
import styles from "../css/UserReviews.module.css";
import { text } from "@fortawesome/fontawesome-svg-core";

import abreAspas from '../assets/abre_aspas.svg';
import fechaAspas from '../assets/fecha_aspas.svg';
import star from '../assets/star.svg';
import user_bride from '../assets/Isabela_cambui_photo.svg';
import user_advisor from '../assets/Aghata_paula_photo.svg';
import user_groom from '../assets/Enzo_martins_photo.svg';

function UserReviews() {
    return (
      <section className={styles.user_reviews}>
        <h1>Avaliações dos nossos usuários</h1>
        <div className={styles.container}>
          <div className={styles.review}>
            <div className={styles.container_abreaspas}>
              <img src={abreAspas} alt="" />
            </div>
            <div className={styles.text}>
             <p>
              Usar a Bridee foi a melhor <br />
              escolha! A plataforma <br />
              simplificou o caos que é <br />
              organizar um casamento e nos <br />
              conectou com fornecedores <br />
              maravilhosos. Super <br />
              recomendo!
             </p>
            </div>
            <div className={styles.container_fechaaspas}>
              <img src={fechaAspas} alt="" />
            </div>
             <div className={styles.user}>
                <img src={user_bride}/>
                <div>
                  <p>Isabela Cambui</p>
                  <span>Noiva</span>
                  <div className={styles.star_rate}>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                  </div>

                </div>
             </div>
          </div>
          
          <div className={styles.review}>
            <div className={styles.container_abreaspas}>
              <img src={abreAspas} alt="" />
            </div>
            <div className={styles.text}>
            <p>
              Nunca pensei que planejar <br />
              o casamento pudesse ser <br />
              tão fácil. A Bridee nos <br />
              ajudou a encontrar o <br />
              assessor certo e a manter <br />
              tudo em ordem, sem <br />
              estresse. Sensacional!
            </p>
            </div>
            <div className={styles.container_fechaaspas}>
              <img src={fechaAspas} alt="" />
            </div>
            <div className={styles.user}>
              <img src={user_groom}/>
              <div>  
                <p>Enzo Martins</p>
                <span>Noivo</span>
                <div className={styles.star_rate}>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.review}>
          <div className={styles.container_abreaspas}>
              <img src={abreAspas} alt="" />
            </div>
            <div className={styles.text}>
            <p>
                A Bridee foi uma mão na roda! <br />
                Encontramos o assessor <br />
                perfeito em poucos cliques, e <br />
                ele cuidou de tudo. Fiquei <br />
                muito mais tranquila sabendo <br />
                que cada detalhe estava <br />
                sendo organizado por lá.
            </p>
            </div>
            <div className={styles.container_fechaaspas}>
              <img src={fechaAspas} alt="" />
            </div>
            <div className={styles.user}>
              <img src={user_advisor}/>
              <div>
                <p>Aghata Paula</p>
                <span>Assessora</span>
                <div className={styles.star_rate}>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                </div>
              </div>
             </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default UserReviews;
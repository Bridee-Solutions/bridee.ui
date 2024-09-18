import React from 'react';
import styles from '../css/WeddingPlannerCTA.module.css'

function WeddingPlannerCTA() {
  return (
    <section className={styles.wedding_planner_cta}>
      <div className={styles.content_wrapper}>
        <h2 className={styles.section_title}>Você é um assessor de casamento?</h2>
        <p className={styles.section_description}>
          Gerencie sua agenda e encontre noivas de forma fácil e rápida.
          <br />
          Nossa plataforma conecta você a casais e oferece ferramentas para organizar todos os detalhes do casamento.
          <br />
          Facilite seu trabalho e crie momentos inesquecíveis.
        </p>
        <button className={styles.cta_button}>COMECE AGORA!</button>
        <p className={styles.login_prompt}>
          Você já tem um perfil de assessor? <a href="#" className={styles.login_link}>Faça login agora</a>
        </p>
      </div>
    
    </section>
  );
}

export default WeddingPlannerCTA;
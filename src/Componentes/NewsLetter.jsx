import React from 'react';
import styles from '../css/NewsLetter.module.css'

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter_content}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a877797631904d752ee17e814c0336719671600b1706e323b5462da7830cb9d9?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="Bridee logo" className={styles.newsletter_logo} />
        <div className={styles.newsletter_text}>
          <h2 className={styles.newsletter_title}>A maneira fácil de planejar</h2>
          <form className={styles.newsletter_form}>
            <div className={styles.input_wrapper}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af1019ae0f34379573b69f05846ae7760a9525ed20ae140b3fc69f9413d30f2?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.email_icon} />
              <input type="email" placeholder="Seu endereço de email" className={styles.email_input} aria-label="Seu endereço de email" />
            </div>
            <button type="submit" className={styles.submit_button}>COMECE A PLANEJAR</button>
          </form>
          <p className={styles.login_prompt}>
            Já tem uma conta? <a href="#" className={styles.login_link}>Entrar</a>
          </p>
          <p className={styles.planner_prompt}>
            Você é um assessor? <a href="#" className={styles.planner_link}>Crie uma conta aqui</a>
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Newsletter;
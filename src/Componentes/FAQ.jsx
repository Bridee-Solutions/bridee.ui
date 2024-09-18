import React from 'react';
import styles from '../css/FAQ.module.css'

const faqItems = [
  "O que é o bridee?",
  "Quem pode se cadastrar?",
  "Que vantagens o bridee me oferece?",
  "Como posso me cadastrar como assessor na plataforma?"
];

function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={styles.faq_content}>
        <h2 className={styles.section_title}>Perguntas frequentes</h2>
        <ul className={styles.faq_list}>
          {faqItems.map((item, index) => (
            <li key={index} className={styles.faq_item}>
              {item}
              <img src={`http://b.io/ext_${37 + index}-`} alt="" className={styles.faq_icon} />
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}

export default FAQ;
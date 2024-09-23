import React from 'react';
import styles from '../css/FAQ.module.css';

const FAQ = () => {
  const questions = [
    'O que é o bridee?',
    'Quem pode se cadastrar?',
    'Que vantagens o bridee me oferece?',
    'Como posso me cadastrar como assessor na plataforma?'
  ];

  return (
    <section className={styles.faq}>
      <h2>Perguntas frequentes</h2>
      {questions.map((question, index) => (
        <div className={styles.question} key={index}>
          <h3>{question}</h3>
        </div>
      ))}
    </section>
  );
};

export default FAQ;

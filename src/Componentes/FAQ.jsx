import React, { useState } from 'react';
import styles from '../css/FAQ.module.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([
    { question: "O que é o bridee?", answer: "O bridee é uma plataforma..." },
    { question: "Quem pode se cadastrar?", answer: "Qualquer pessoa pode se cadastrar..." },
    { question: "Que vantagens o bridee me oferece?", answer: "A plataforma oferece..." },
    { question: "Como posso me cadastrar como assessor na plataforma?", answer: "Para se cadastrar como assessor..." }
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const addFAQ = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Perguntas frequentes</h2>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
            <div 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.arrow}>
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.addFaqContainer}>
        <h3>Adicionar nova pergunta</h3>
        <form onSubmit={addFAQ} className={styles.faqForm}>
          <input 
            type="text" 
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Digite sua pergunta"
            className={styles.faqInput}
            required
          />
          <textarea 
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Digite a resposta"
            className={styles.faqTextarea}
            required
          />
          <button type="submit" className={styles.addButton}>Adicionar Pergunta</button>
        </form>
      </div>
    </section>
  );
};

export default FAQ;

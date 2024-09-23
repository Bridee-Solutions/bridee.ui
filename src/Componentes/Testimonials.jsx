import React from 'react';
import styles from '../css/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Isabela Carvalho', text: 'Excelente serviço!...', image: '/Assets/isabela.png' },
    { name: 'Enzo Marios', text: 'Altamente recomendado!...', image: '/Assets/enzo.png' },
    { name: 'Agatha Paula', text: 'Tornou nosso casamento perfeito!', image: '/Assets/aghata.png' }
  ];

  return (
    <section className={styles.testimonials}>
      <h2>Avaliações dos nossos usuários</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonial} key={index}>
            <p>"{testimonial.text}"</p>
            <div className={styles.user}>
              <img src={testimonial.image} alt={testimonial.name} />
              <span>{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

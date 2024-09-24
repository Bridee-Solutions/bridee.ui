import React from 'react';
import styles from '../css/Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Isabela Cambuí',
    role: 'Noiva',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor.',
    image: '/Assets/isabela.png',
    stars: '/Assets/estrelas.svg',
  },
  {
    id: 2,
    name: 'Enzo Martins',
    role: 'Noivo',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor.',
    image: '/Assets/enzo.png',
    stars: '/Assets/estrelas.svg',
  },
  {
    id: 3,
    name: 'Aghata Paula',
    role: 'Assessora',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor.',
    image: '/Assets/aghata.png',
    stars: '/Assets/estrelas.svg',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Avaliações dos nossos usuários</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <img src="/Assets/Abreaspas.svg" alt="aspas" className={styles.quoteIcon} />
            <p className={styles.feedback}>{testimonial.feedback}</p>
            <div className={styles.profileContainer}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.avatar}
              />
              <div className={styles.userInfo}>
                <p className={styles.userName}>{testimonial.name}</p>
                <p className={styles.userRole}>{testimonial.role}</p>
                <img
                  src={testimonial.stars}
                  alt="estrelas"
                  className={styles.stars}
                />
              </div>
            </div>
            <img src="/Assets/fechaaspas.png" alt="aspas" className={styles.quoteIconRight} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

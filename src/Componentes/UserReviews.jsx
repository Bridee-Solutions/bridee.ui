import React from 'react';
import styles from '../css/UserReviews.module.css'

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor. Aliquam erat volutpat. Pellentesque ante diam, accumsan vitae est sed, suscipit consequat metus.",
    name: "Isabela Cambui",
    role: "Noiva",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/827284bc1459934deda2902d4b81469bd4fceec312fdc0c72a284895f6bf052a?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor. Aliquam erat volutpat. Pellentesque ante diam, accumsan vitae est sed, suscipit consequat metus.",
    name: "Enzo Martins",
    role: "Noivo",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0130fa273b37ea30fc34fe67c4cf9078149c0785f0a11846ea240010746bc02b?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non eros at auctor. Aliquam erat volutpat. Pellentesque ante diam, accumsan vitae est sed, suscipit consequat metus.",
    name: "Aghata Paula",
    role: "Assessora",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/707b647dbbb854274d0a9710af9422fe59f32d057a2a230a16837e33e40a837d?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7"
  }
];

function UserReviews() {
  return (
    <section className={styles.user_reviews}>
      <h2 className={styles.section_title}>Avaliações dos nossos usuários</h2>
      <div className={styles.reviews_container}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review_card}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2fea5182bfcfd2b37f5f5b4d3e499bc06b5c48b28128acd157a05960d755883?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.quote_icon} />
            <p className={styles.review_text}>{review.text}</p>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e47336c7c66bd29af3425695636de5fa16a5e79a3d8df3dd9da029ee4909fc?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.quote_icon}  {...styles.flipped} />
            <div className={styles.reviewer_info}>
              <img src={review.imageSrc} alt={review.name} className={styles.reviewer_image} />
              <div className={styles.reviewer_details}>
                <p className={styles.reviewer_name}>{review.name}</p>
                <p className={styles.reviewer_role}>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/837cdf156d2261f938ea0f943831d365ab119e8f00ec2b36e6053cb299cfbf08?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.decorative_icon} {...styles.icon_1} />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c4a0310738bb4f4805783e7fda607b70c2f38ee843153f07300b388431047f?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.decorative_icon} {...styles.icon_2} />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bd528ed78af3694d7a57f120c22e7bd12d486bf6c655f744b4c629833ecb36?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.decorative_icon} {...styles.icon_3} />
    
    </section>
  );
}

export default UserReviews;
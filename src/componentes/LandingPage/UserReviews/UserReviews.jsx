import styles from "./UserReviews.module.css";

import abreAspas from "../../../assets/abre_aspas.svg";
import fechaAspas from '../../../assets/fecha_aspas.svg';
import star from '../../../assets/star.svg';
import user_bride from '../../../assets/Isabela_cambui_photo.svg';
import user_advisor from '../../../assets/Aghata_paula_photo.svg';
import user_groom from '../../../assets/Enzo_martins_photo.svg';

function UserReviews() {
  
  const testimonials = [
    {
      id: 1,
      text: `Usar a Bridee foi a melhor\n escolha! A plataforma\n simplificou o caos que é\norganizar um casamento e nos\nconectou com fornecedores\nmaravilhosos. Super\nrecomendo!`,
      name: "Isabela Cambui",
      role: "Noiva",
      image: user_bride,
    },
    {
      id: 2,
      text: `Nunca pensei que planejar\no casamento pudesse ser\ntão fácil. A Bridee nos ajudou\na encontrar o\nassessor certo e a manter\ntudo em ordem, sem\nestresse. Sensacional!`,
      name: "Enzo Martins",
      role: "Noivo",
      image: user_groom,
    },
    {
      id: 3,
      text: `A Bridee foi uma mão na roda!\nEncontramos o assessor\nperfeito em poucos cliques, e\nele cuidou de tudo. Fiquei\n muito mais tranquila sabendo\n que cada detalhe estava\n sendo organizado por lá.`,
      name: "Aghata Paula",
      role: "Assessora",
      image: user_advisor,
    },
  ];
  
  return (
    <section className={styles.user_reviews}>
    <h1>Avaliações dos nossos usuários</h1>
    <div className={styles.slide_wrapper}>
    
    <div className={styles.container}>
    {testimonials.map((testimonial, index) => (
      <div key={testimonial.id} className={styles.review}>
      <div className={styles.container_abreaspas}>
      <img src={abreAspas} alt="abre aspas" />
      </div>
      
      <div className={styles.text}>
      {testimonial.text.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      </div>
      
      <div className={styles.container_fechaaspas}>
      <img src={fechaAspas} alt="fecha aspas" />
      </div>
      
      <div className={styles.user}>
      <img src={testimonial.image} alt={`Avatar de ${testimonial.name}`} />
      <div>
      <p>{testimonial.name}</p>
      <span>{testimonial.role}</span>
      <div className={styles.star_rate}>
      {[...Array(5)].map((_, starIndex) => (
        <img key={starIndex} src={star} alt="estrela" />
      ))}
      </div>
      </div>
      </div>

      </div>
    ))}
    </div>
    </div>
    </section>
  );
}

export default UserReviews;
import styles from "./Categories.module.css";
import Videography from "../../../assets/landingpage/Categories/foto_video_icon.svg";
import Local from "../../../assets/landingpage/Categories/local_icon.svg";
import Music from "../../../assets/landingpage/Categories/music_icon.svg";
import Cake from "../../../assets/landingpage/Categories/wedding_cake_icon.svg";
import Decoration from "../../../assets/landingpage/Categories/decoration_icon.svg";
import Gastronomy from "../../../assets/landingpage/Categories/gastronomy_icon.svg";
import Bride from "../../../assets/landingpage/Categories/wedding_dress_icon.svg";
import Groom from "../../../assets/landingpage/Categories/wedding_shirt_icon.svg";

const categorias = [
  { image: Videography, descricao: "Fotos & Vídeo" },
  { image: Local, descricao: "Local" },
  { image: Music, descricao: "Música" },
  { image: Cake, descricao: "Bolo" },
  { image: Decoration, descricao: "Decoração" },
  { image: Gastronomy, descricao: "Gastronomia" },
  { image: Bride, descricao: "Noiva" },
  { image: Groom, descricao: "Noivo" },
];

function Categories() {
  return (
    <section className={styles.categories}>
    <div className={styles.containerCategoria}>
      <div className={styles.containerTitulo}>
        <span>DESCUBRA FORNECEDORES POR CATEGORIA</span>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.container}>
          {categorias.map((categoria, index) => (
            <div className={styles.containerIcon} key={index}>
              <div className={styles.containerImg}>
                <img src={categoria.image} alt={categoria.descricao} />
              </div>
              <div className={styles.containerDesc}>
                <p>{categoria.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default Categories;

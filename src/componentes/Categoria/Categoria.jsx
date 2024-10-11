import styles from "./Categoria.module.css";

import wedding from "../../assets/painel/wedding.svg";
import buffet from "../../assets/painel/buffet.svg";
import camera from "../../assets/painel/camera.svg";
import confeitaria from "../../assets/painel/confeitaria.svg";
import moda from "../../assets/painel/moda.svg";
import hospedagem from "../../assets/painel/hospedagem.svg";
import decoracao from "../../assets/painel/decoracao.svg";
import florista from "../../assets/painel/florista.svg";
import papelaria from "../../assets/painel/papel.svg";
import entretenimento from "../../assets/painel/entretenimento.svg";
import videografo from "../../assets/painel/videografo.svg";
import local from "../../assets/painel/local.svg";

function Categoria({ icone, titulo }) {
  return (
    <div className={styles.categoriaCard}>
      <div className={styles.icone}>
        <img src={icone} alt={titulo} />
      </div>
      <div className={styles.textos}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <a href="#" className={styles.gerenciar}>
          Adicionar
        </a>
      </div>
    </div>
  );
}

function Categorias() {
  const categorias = [
    { titulo: "Vestidos", icone: wedding },
    { titulo: "Fotógrafo", icone: camera },
    { titulo: "Florista", icone: florista },
    { titulo: "Buffet & Gastronomia", icone: buffet },
    { titulo: "Decoração", icone: decoracao },
    { titulo: "Locais", icone: local },
    { titulo: "Hospedagem", icone: hospedagem },
    { titulo: "Confeitaria", icone: confeitaria },
    { titulo: "Moda & Beleza", icone: moda },
    { titulo: "Videógrafos", icone: videografo },
    { titulo: "Papelaria", icone: papelaria },
    { titulo: "Entretenimento", icone: entretenimento }
  ];
  

  return (
    <div className={styles.categoriasContainer}>
      <div className={styles.boxCategoria}>
       
        <div className={styles.containerGrid}>
          <div className={styles.grid}>
            {categorias.map((categoria) => (
              <Categoria
                key={categoria.titulo}
                titulo={categoria.titulo}
                icone={categoria.icone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;

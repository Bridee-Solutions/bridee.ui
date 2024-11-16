import styles from "./CategoriaNavegacao.module.css";
import CardNavegacao from "../PesquisaCategoria/CardNavegacao";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoriaNavegacao({ categorias, onSelectCategory, tipo, isSubcategoria, returnToCategories }) {
  return (
    <div className={styles.navegarCategoria}>
      <div className={styles.containerTitulo}>
        <span className={styles.titulo}>
          <div className={styles.titulo_seta}>
            {isSubcategoria && 
                <div className={styles.setaVolta} onClick={returnToCategories}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                <span className={styles.voltar}>VOLTAR</span>
              </div>
              }
          </div>
          <div style={{width: "70%"}}>
            {tipo === "fornecedores" ? "Navegar por categoria" : tipo === "locais" ? "Navegar por estilo" : ""}
          </div>

        </span>
        <span className={styles.subtitulo}>
          {tipo === "fornecedores"
            ? "Explore os melhores fornecedores de casamento em todas as categorias e descubra o melhor dos melhores para o seu dia especial."
            : tipo === "locais"
            ? "Locais que combinam com seu estilo e deixam o momento ainda mais especial" : ""}
        </span>
      </div>
      <div className={styles.containerCards}>
        <div className={styles.cadaCardLocal}>
          {categorias.content?.map((categoria, index) => (
            <CardNavegacao
              key={index}
              nome={categoria.nome}
              imagem={categoria.imagemUrl}
              onClick={() => onSelectCategory(categoria)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriaNavegacao;

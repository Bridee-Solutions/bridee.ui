import styles from "./CategoriaNavegacao.module.css";
import CardNavegacao from "../PesquisaCategoria/CardNavegacao";
function CategoriaNavegacao({ categorias, onSelectCategory, tipo }) {
  return (
    <div className={styles.navegarCategoria}>
      <div className={styles.containerTitulo}>
        <span className={styles.titulo}>
        {tipo === "fornecedores" ? "Navegar por categoria" : tipo === "locais" ? "Navegar por estilo" : ""}

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
          {categorias.map((categoria, index) => (
            <CardNavegacao
              key={index}
              nome={categoria.nome}
              imagem={categoria.imagem}
              onClick={() => onSelectCategory(categoria.nome)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriaNavegacao;

import styles from "./CategoriaNavegacao.module.css";

function CategoriaNavegacao({ categorias, onSelectCategory }) {
    return (
      <div className={styles.navegarCategoria}>
        <div className={styles.containerTitulo}>
          <span className={styles.titulo}>Navegar por estilo</span>
          <span className={styles.subtitulo}>Descrição opcional...</span>
        </div>
        <div className={styles.containerCards}>
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
    );
  }
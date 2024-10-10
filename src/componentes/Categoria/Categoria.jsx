import styles from './Categoria.module.css';

import wedding from './assets/icons/wedding.svg';
import buffet from './assets/icons/buffet.svg';
import camera from './assets/icons/camera.svg';
import confeitaria from './assets/icons/confeitaria.svg';
import moda from './assets/icons/moda.svg';
import hospedagem from './assets/icons/hospedagem.svg';
import decoracao from './assets/icons/decoracao.svg';
import florista from './assets/icons/florista.svg';
import papelaria from './assets/icons/papel.svg';
import entretenimento from './assets/icons/entretenimento.svg';
import videografo from './assets/icons/videografo.svg';
import local from './assets/icons/local.svg';

function Categoria({ icone, titulo }) {
  return (
    <div className={styles.categoriaCard}>
      <div className={styles.icone}>
        <img src={icone} alt={titulo} />
      </div>
      <div className={styles.textos}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <a href="#" className={styles.gerenciar}>Gerenciar</a>
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
    { titulo: "Decoração", icone: decoracao},
    { titulo: "Locais", icone: local},
    { titulo: "Hospedagem", icone: hospedagem },   
    { titulo: "Confeitaria", icone: confeitaria },
    { titulo: "Moda & Beleza", icone: moda},
    { titulo: "Videógrafos", icone: videografo},
    { titulo: "Papelaria", icone: papelaria },
    { titulo: "Entretenimento", icone: entretenimento }
  ];

  return (
    <div className={styles.categoriasContainer}>
      <div className={styles.filtros}>
        <input className={styles.inputPesquisa} type="text" placeholder="Pesquisar categoria de fornecedores" />
        <input className={styles.inputFiltro} type="text" placeholder="Filtrar por tipo" />
      </div>
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
  );
}

export default Categorias;
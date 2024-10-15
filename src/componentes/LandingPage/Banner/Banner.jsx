import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Facilitamos o encontro entre noivas e</h1>
        <h1>assessores para casamentos perfeitos</h1>
      </div>
      <p>Simples. Organizado. Sem estresse.</p>
    </div>
  );
}

export default Banner;
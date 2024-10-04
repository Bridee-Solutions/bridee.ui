import styles from './Header.module.css'


function Header() {
  return (
    <header>
    
    <div className={styles.header_boarder}></div>
    <div className={styles.header_body}>
      <div className={styles.header_logo}>
        <h1>bridee<b>.</b></h1>
        <p>O match perfeito para o dia dos sonhos</p>
      </div>
      
      <div className={styles.header_buttons}>
      <button className={styles.login_button}>Login</button>
      <button className={styles.register_button}>Cadastre-se agora</button>
      </div>
    </div>
    
    </header>
  );
}

export default Header;
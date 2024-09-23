import styles from './Error.module.css'
import Footer from '../../componentes/Footer'
function Error() {

    return (
        <div className={styles.error_base}>
            <div className={styles.error_image}>
                <div className={styles.error_message}>
                    <h1>oops... página não encontrada</h1>
                    <p>Que tal voltar à página inicial enquanto <br/> ajustamos as coisas?</p>
                    <button>Voltar para a pàgina inicial</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );

}

export default Error
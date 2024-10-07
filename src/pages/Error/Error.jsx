import styles from './Error.module.css'
import Baseboard from '../../componentes/LandingPage/BaseBoard/Baseboard';

import { useNavigate } from 'react-router-dom';

function Error() {

    const navigate = useNavigate();

    function home() {
        navigate("/");
    }

    return (
        <section className={styles.error_base}>
            <div className={styles.error_image}>
                <div className={styles.error_message}>
                    <h1>oops... página não encontrada</h1>
                    <p>Que tal voltar à página inicial enquanto <br/> ajustamos as coisas?</p>
                    <button onClick={home}>Voltar para a pàgina inicial</button>
                </div>
            </div>
            <Baseboard/>
        </section>
    );

}

export default Error
import styles from './ListaTarefas.module.css';
import "../../index.css"
import Navbar from "../../componentes/Navbar/Navbar";

function ListaTarefas() { 
    return (
        <div className={styles['lista-de-tarefas']}>
            <Navbar/>
            <div className= {styles.conteudo}>
                <div className= {styles.tituloPage}>
                    <p>Ferramentas de planejamento {'>'} <b>Lista de tarefas</b></p>
                </div>
                <div className={styles['card-fundo']}>
                    <div className={styles.tituloLista}>
                        <p>Lista de tarefas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaTarefas;
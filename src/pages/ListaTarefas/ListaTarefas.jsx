import styles from './ListaTarefas.module.css';
import "../../index.css"
import Navbar from "../../componentes/Navbar/Navbar";
import OpcaoFiltro from "../../componentes/OpcoesFiltro/OpcaoFiltro";

function ListaTarefas() { 
    const statusOptions = ['Concluída', 'Em andamento'];
    const monthOptions = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 
        'Novembro', 'Dezembro'
    ];
    const categoryOptions = [
        'Fotografia', 'Cabelo e maquiagem', 'Vestidos', 'Locais', 
        'Música', 'Planejador'
    ];

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
                        <div className = {styles.subtitulo}>
                            <p> FILTROS </p>
                        </div>
                    </div>
                    <div className={styles.filtros}>
                        <OpcaoFiltro title="Status" options={statusOptions}/>
                        <OpcaoFiltro title="Mês" options={monthOptions} />
                        <OpcaoFiltro title="Categoria" options={categoryOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaTarefas;
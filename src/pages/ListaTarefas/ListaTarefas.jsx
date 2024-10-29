import React, {useState} from 'react';
import styles from './ListaTarefas.module.css';
import "../../index.css";
import Navbar from "../../componentes/Navbar/Navbar";
import OpcaoFiltro from "../../componentes/OpcoesFiltro/OpcaoFiltro";
import TaskList from '../../componentes/Tasks/TaskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ListaTarefas() {
    
    const [checkedCount, setCheckedCount] = useState(0);

    const handleCheckboxChange = (isChecked) => {
        setCheckedCount(prevCount => isChecked ? prevCount + 1 : prevCount - 1);
    };
    
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
    const overdueTasks = [{title: 'Defina o orçamento do seu casamento.', date: '02 de agosto de 2024', tag: null}, { title: 'Defina a data do seu casamento.', date: '05 de agosto de 2024', tag: 'Locais' }]
    const currentMonthTasks = [
        { title: 'Reserve o fotógrafo', date: '12 de outubro de 2024', tag: 'Fotografia' },
        { title: 'Escolha o vestido de noiva', date: '20 de outubro de 2024', tag: 'Vestidos' }
    ];
    
    const nextMonthTasks = [
        { title: 'Defina o plano musical', date: '05 de novembro de 2024', tag: 'Música' },
        { title: 'Contrate o cabeleireiro', date: '15 de novembro de 2024', tag: 'Cabelo e maquiagem' }
    ];

    let countTasks = overdueTasks.length + currentMonthTasks.length + nextMonthTasks.length;

    return (
        <div className={styles['lista-de-tarefas']}>
            <Navbar/>
            <div className= {styles.conteudo}>
                <div className= {styles.tituloPage}>
                    <p>Ferramentas de planejamento {'>'} <b>Lista de tarefas</b></p>
                </div>
                <div className={styles['card-fundo']}>
                    <div className={styles.header}>
                        <p className={styles.tituloLista}>Lista de tarefas</p>

                        <div className={styles.progress_bar_container}>
                            <div className={styles.progress_bar}>
                                <div className={styles.progress} style={{width: `${(checkedCount/ countTasks)*100}%`}}></div>
                            </div>
                            <p>{checkedCount} de {countTasks} tarefas concluídas</p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div>
                            <div className = {styles.subtitulo}>
                                <p> FILTROS </p>
                            </div>
                            <div className={styles.filtros}>
                                <OpcaoFiltro title="Status" options={statusOptions}/>
                                <OpcaoFiltro title="Mês" options={monthOptions} />
                                <OpcaoFiltro title="Categoria" options={categoryOptions} />
                            </div>
                        </div>
                        
                        <div className={styles.tasksList}>
                            <label htmlFor='taskSearchBar' className={styles.searchBar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
                                <input type="text" name="task-search-bar" id="taskSearchBar" placeholder='Pesquisar tarefa' />
                            </label>
                            <div className={styles.list}>
                                <div>
                                    <h2>Atrasado</h2>
                                    <TaskList taskList={overdueTasks} onCheckboxChange={handleCheckboxChange}/>
                                </div>

                                <div>
                                    <h2>Outubro 2024</h2>
                                    <TaskList taskList={currentMonthTasks} onCheckboxChange={handleCheckboxChange}/>
                                </div>

                                <div>
                                    <h2>Novembro 2024</h2>
                                    <TaskList taskList={nextMonthTasks} onCheckboxChange={handleCheckboxChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaTarefas;
import React, {useState, useRef} from 'react';
import styles from './ListaTarefas.module.css';
import "../../index.css";
import Navbar from "../../componentes/Navbar/Navbar";
import OpcaoFiltro from "../../componentes/OpcoesFiltro/OpcaoFiltro";
import TaskList from '../../componentes/Tasks/TaskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTriangleExclamation, faTag, faCalendar } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../componentes/Modal/Modal';
import ModalHeader from '../../componentes/Modal/ModalHeader/ModalHeader';
import ModalBody from '../../componentes/Modal/ModalBody/ModalBody'
import ModalFooter from '../../componentes/Modal/ModalFooter/ModalFooter'
import ModalFooterButton from '../../componentes/Modal/ModalFooterButton/ModalFooterButton'

function ListaTarefas() {
    
    const [checkedCount, setCheckedCount] = useState(0);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalAddTask, setModalAddTask] = useState(false);
    const [taskDate, setTaskDate] = useState('');
    const [task, setTask] = useState("");
    const dateInputRef = useRef(null);

    const abrirModalDelete = (task) => {
        setTask(task);
        setModalDelete(true);
    };

    const abrirModalAdd = () => {

        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10);
        setTaskDate(formattedDate);
        setModalAddTask(true);
    }

    const changeDate = (e) => {
        setTaskDate(e.target.value);
    }

    const handleLabelClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const fecharModalAdd = () => {
        setModalAddTask(false);
    }
    

    const fecharModalDelete = () => {
        setModalDelete(false);
        setTask("");
    };

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
                                    <TaskList taskList={overdueTasks} onCheckboxChange={handleCheckboxChange} onDelete={abrirModalDelete} onCreate={abrirModalAdd}/>
                                </div>

                                <div>
                                    <h2>Outubro 2024</h2>
                                    <TaskList taskList={currentMonthTasks} onCheckboxChange={handleCheckboxChange} onDelete={abrirModalDelete} onCreate={abrirModalAdd}/>
                                </div>

                                <div>
                                    <h2>Novembro 2024</h2>
                                    <TaskList taskList={nextMonthTasks} onCheckboxChange={handleCheckboxChange} onDelete={abrirModalDelete} onCreate={abrirModalAdd}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalAddTask && (
            <Modal>
                <ModalHeader onClose={fecharModalAdd}>
                <h1>Criar tarefa</h1>
                </ModalHeader>
                <ModalBody>
                <div className={styles.containerModalCreate}>
                    <div>
                        <p>Nome da tarefa</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Descrição da tarefa personalizada</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Notas</p>
                        <input type="text" placeholder='Escreva algo aqui...'/>
                    </div>
                    <div className={styles.containerDateTag}>
                        <div>
                            <p>Data</p>
                            <div>
                                <input type="date"  ref={dateInputRef} id="dateTaskInput" onChange={changeDate} value={taskDate} style={{opacity: 0, position: "absolute"}} />
                                <label onClick={handleLabelClick} htmlFor="dateTaskInput">
                                    <FontAwesomeIcon icon={faCalendar}/>
                                    <span>{formatDate(taskDate)}</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <p>Categoria</p>
                            <div>
                                <FontAwesomeIcon icon={faTag}/>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                <ModalFooterButton
                    button="cancel_button"
                    text="Cancelar"
                    onClick={fecharModalAdd}
                />
                <ModalFooterButton button="add_button" text="Salvar" />
                </ModalFooter>
            </Modal>
            )}

            {modalDelete && (
            <Modal>
                <ModalHeader onClose={fecharModalDelete}>
                <h1>Remover tarefa</h1>
                </ModalHeader>
                <ModalBody>
                <div className={styles.containerModalDelete}>
                    <div>
                        <FontAwesomeIcon className={styles.iconAlert} icon={faTriangleExclamation} style={{color: "#FF5154"}}/>
                        <p>Deseja remover a tarefa "{task}?"</p>
                        <span>Você não poderá recuperá-lo novamente após a exclusão.</span>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                <ModalFooterButton
                    button="cancel_button"
                    text="Cancelar"
                    onClick={fecharModalDelete}
                />
                <ModalFooterButton button="delete_button" text="Deletar" />
                </ModalFooter>
            </Modal>
            )}
        </div>
    );
};

export default ListaTarefas;
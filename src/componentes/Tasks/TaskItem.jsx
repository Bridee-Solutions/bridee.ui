import styles from './Tasks.module.css';
import "../../index.css";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const TaskItem = ({ index, task, onDelete, onCheck, onView}) => {
    const [isChecked, setIsChecked] = useState(task.status === "CONCLUIDO");

    useEffect(() => {
        setIsChecked(task.status === "CONCLUIDO");
    }, [task.status]);

    const handleCheckboxChange = () => {
        const checkedStatus = !isChecked;
        setIsChecked(checkedStatus);
        onCheck(checkedStatus, task); 
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Selecione uma data";
    
        const [year, month, day] = dateString.split("-"); // Supondo formato 'YYYY-MM-DD'
        const date = new Date(year, month - 1, day); // Mês é zero-indexado em JavaScript
    
        if (isNaN(date.getTime())) {
            return "Selecione uma data";
        }
    
        return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const formatCategory = (category) => {
        switch(category) {
            case "FOTOGRAFIA":
                return "Fotografia";
            case "CABELO_E_MAQUIAGEM":
                return "Cabelo e Maquiagem";
            case "VESTIDOS":
                return "Vestidos";
            case "LOCAIS":
                return "Locais";
            case "MUSICA":
                return "Musica";
            case "PLANEJADOR":
                return "Planejador";
            default:
                return "Categoria Invalida"    
        }
    }

   
    return (
        <div onClick={() => onView(task)} className={`${styles['task-item']} ${isChecked ? styles.task_checked : ''}`}>
            <div className={`${styles.task} ${isChecked ? styles.task_checked : ''}`}>
                <input 
                    type="checkbox" 
                    id={index} 
                    checked={isChecked} 
                    onChange={handleCheckboxChange}
                    style={{display: 'none'}}
                />
                <div className={styles.check_container}>
                    <label 
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange();
                    }}
                    className={`${styles.check_task} ${isChecked ? styles.check_task_checked : ''}`} 
                    ></label>
                </div>
                <div className={styles.task}>
                    <div className={styles['task-details']}>
                        <span className={styles.nameTask}>{task.nome}</span>
                        <span className={styles.dateTask}>{formatDate(task.dataLimite)}</span>
                    </div>
                    <div className={styles.tag_container}>
                        {task.categoria && <span className={styles.tag}>{formatCategory(task.categoria)}</span>}
                    </div>
                </div>
            </div>
            <button 
            className={styles['delete-btn']} 
            onClick={(e) => {
                e.stopPropagation();
                onDelete();
            }}>
                <FontAwesomeIcon icon={faTrashCan} size='xl'/>
            </button>
        </div>
    );
}

export default TaskItem;
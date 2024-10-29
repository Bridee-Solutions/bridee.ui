import styles from './Tasks.module.css';
import { useState } from 'react';
import "../../index.css";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';

const TaskList = ({ taskList, onCheckboxChange , countTaskNumber}) => {
    const [tasks, setTasks] = useState(
        taskList.map(task => ({ ...task, id: `${task.title}-${Math.random().toString(36).substr(2, 9)}` }))
    );

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div className={styles['task-list']}>
                {tasks.map((task) => (
                    <TaskItem 
                        key={task.id}
                        index={task.id}
                        title={task.title} 
                        date={task.date} 
                        tag={task.tag}
                        onCheck={onCheckboxChange}
                        onDelete={() => deleteTask(task.id)}
                    />
                ))}  
            </div>
            <label htmlFor='addTask' className={styles.add_task}>
                <button id='addTask'><FontAwesomeIcon icon={faPlus} size='2xl'/></button>
                <h3>Adicionar tarefa</h3>
            </label>
        </div>
    );
};

export default TaskList;
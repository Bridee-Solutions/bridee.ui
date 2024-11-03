import styles from './Tasks.module.css';
import { useState } from 'react';
import "../../index.css";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ taskList, onCheckboxChange , onDelete, onCreate}) => {
    const [tasks, setTasks] = useState(
        taskList.map(task => ({ ...task, id: `${task.title}-${Math.random().toString(36).substr(2, 9)}` }))
    );

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
                        onDelete={() => onDelete(task.title)}
                    />
                ))}  
            </div>
            <label htmlFor='addTask' className={styles.add_task}>
                <button id='addTask' onClick={onCreate}><FontAwesomeIcon icon={faPlus} size='2xl'/></button>
                <h3>Adicionar tarefa</h3>
            </label>
        </div>
    );
};

export default TaskList;
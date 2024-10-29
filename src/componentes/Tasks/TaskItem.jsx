import styles from './Tasks.module.css';
import "../../index.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const TaskItem = ({ index, title, date, tag, onDelete, onCheck}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const checkedStatus = !isChecked;
        setIsChecked(checkedStatus);
        onCheck(checkedStatus); 
    };
   
    return (
        <div className={`${styles['task-item']} ${isChecked ? styles.task_checked : ''}`}>
            <div className={`${styles.task} ${isChecked ? styles.task_checked : ''}`}>
                <input type="checkbox" id={index} checked={isChecked} onChange={handleCheckboxChange} style={{display: 'none'}}/>
                <label htmlFor={index}  className={`${styles.check_task} ${isChecked ? styles.check_task_checked : ''}`} ></label>
                <div className={styles.task}>
                    <div className={styles['task-details']}>
                        <h3>{title}</h3>
                        <p>{date}</p>
                    </div>
                    <div className={styles.tag_container}>
                    {tag && <span className={styles.tag}>{tag}</span>}
                    </div>
                </div>
            </div>
            <button className={styles['delete-btn']} onClick={onDelete}><FontAwesomeIcon icon={faTrashCan} size='xl'/></button>
        </div>
    )
}

export default TaskItem;
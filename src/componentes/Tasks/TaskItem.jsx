import styles from './Tasks.module.css';
import "../../index.css";
// import { Icon } from '@iconify/react';

const TaskItem = ({ title, date, tag}) => {
    return (
        <div className={styles['task-item']}>
            <input type="checkbox" />
            <div className={styles['task-details']}>
                <h3>{title}</h3>
                <p>{date}</p>
                {tag && <span className="tag">{tag}</span>}
            </div>
            {/* <button onClick={onDelete} className="delete-btn"><Icon icon= "twotone-delete" /></button> */}
        </div>
    )
}

export default TaskItem;
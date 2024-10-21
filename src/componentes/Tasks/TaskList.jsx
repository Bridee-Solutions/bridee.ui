import styles from './Tasks.module.css';
import "../../index.css";
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
    return (
        <div className={styles['task-list']}>
            {tasks.map((task, index) => (
            <TaskItem 
            key={index} 
            title={task.title} 
            date={task.date} 
            tag={task.tag}
            onDelete={() => console.log(`Delete task: ${task.title}`)}
            />
        ))}   
        </div>
    );
};

export default TaskList;
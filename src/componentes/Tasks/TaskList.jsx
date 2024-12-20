import styles from "./Tasks.module.css";
import { useState } from "react";
import "../../index.css";
import TaskItem from "./TaskItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({ tasks, onCheckboxChange, onDelete, onCreate, onView }) => {
  return (
    <div>
      <div className={styles.respiro}>
        <div className={styles["task-list"]}>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id || index}
              index={task.id || index}
              task={task}
              onCheck={onCheckboxChange}
              onView={onView}
              onDelete={() => onDelete(task)}
            />
          ))}
        </div>
      </div>
      <label htmlFor="addTask" className={styles.add_task}>
        <button id="addTask" onClick={onCreate}>
          <FontAwesomeIcon icon={faPlus} size="2xl" />
        </button>
        <span className={styles.adicionar}>Adicionar tarefa</span>
      </label>
    </div>
  );
};

export default TaskList;

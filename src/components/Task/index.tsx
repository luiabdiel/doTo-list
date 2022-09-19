import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./task.module.scss"
import { Itask } from "../../App";

interface Props {
    task: Itask
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button 
                onClick={() => onComplete(task.id)}
                className={styles.checkContainer}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>
            
            <button 
                className={styles.deleteButton} 
                onClick={() => onDelete(task.id)}>
                <TbTrash size={18} />
            </button>
        </div>
    )
}
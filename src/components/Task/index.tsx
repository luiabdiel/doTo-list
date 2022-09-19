import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./task.module.scss"
import { Itask } from "../../App";

interface Props {
    task: Itask
    onDelete: (taskId: string) => void 
}

export function Task({ task, onDelete }: Props) {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer}>
                <div />
            </button>

            <p>{task.title}</p>
            
            <button 
                className={styles.deleteButton} 
                onClick={() => onDelete(task.id)}>
                <TbTrash size={18} />
            </button>
        </div>
    )
}
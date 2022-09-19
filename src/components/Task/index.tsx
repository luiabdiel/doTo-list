import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./task.module.scss"
import { Itask } from "../../App";

interface Props {
    task: Itask
}

export function Task({ task }: Props) {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer}>
                <div />
            </button>

            <p>{task.title}</p>
            
            <button 
                className={styles.deleteButton}>
                <TbTrash size={18} />
            </button>
        </div>
    )
}
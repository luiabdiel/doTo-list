import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./task.module.scss"

export function Task() {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer}>
                <div />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            
            <button 
                className={styles.deleteButton}>
                <TbTrash size={18} />
            </button>
        </div>
    )
}
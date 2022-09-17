import { Itask } from "../../App"
import { Task } from "../Task"
import styles from "./tasks.module.scss"

interface Props {
    tasks: Itask[]
}

export function Tasks({ tasks }: Props) {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>

            <div className={styles.list}>
                
            {tasks.map((task) => {
                return <Task />
            })}

            </div>
        </section>
    )
}
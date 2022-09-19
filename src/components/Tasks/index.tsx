import { Itask } from "../../App"
import { Task } from "../Task"
import styles from "./tasks.module.scss"

interface Props {
    tasks: Itask[]
}

export function Tasks({ tasks }: Props) {
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter((tasks) => tasks.isCompleted).length

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </section>
    )
}

import styles from "./task.module.scss"

export function Tasks() {
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
        </section>
    )
}
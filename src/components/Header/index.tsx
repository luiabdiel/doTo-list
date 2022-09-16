import todoLogo from "../../assets/toDo-logo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm}>
                <input 
                    placeholder="Adicione uma nova tarefa" 
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}
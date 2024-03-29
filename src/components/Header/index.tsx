import todoLogo from "../../assets/toDo-logo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.scss";
import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (!title.trim() || title.length === 0) return
        
        onAddTask(title)
        setTitle("")
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={onChangeTitle}
                    value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}
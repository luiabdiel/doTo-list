import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import  "./styles/global.scss"

export interface Itask {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Itask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} />
    </>
  )
}

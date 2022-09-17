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

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}

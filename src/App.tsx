import { TaskForm } from "./componants/TaskForm"
import { TaskList } from "./componants/TaskList"

export function App() {

  return (
    <div className = "flex flex-col items-center mt-16 w-full">
      <TaskForm />
      <TaskList />
    </div>
  )
}
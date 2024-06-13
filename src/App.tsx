import { TaskForm } from "./componants/TaskForm"
import { TaskList } from "./componants/TaskList"

export function App() {

  return (
    <div className = "flex flex-col content-center mt-16">
      <TaskForm />
      <TaskList />
    </div>
  )
}
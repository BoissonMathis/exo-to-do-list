import { TaskForm } from "./componants/TaskForm"
import { TaskList } from "./componants/TaskList"

export function App() {

  return (
    <div className="mt-16">
      <TaskForm />
      <TaskList />
    </div>
  )
}
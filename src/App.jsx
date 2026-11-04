import { TaskHeader } from "./components/TaskHeader/TaskHeader.jsx";
import { AddTask } from "./components/AddTask/AddTask.jsx";
import { TasksList } from "./components/TasksList/TasksList.jsx";
import { TaskItem } from "./components/TaskItem/TaskItem.jsx";

function App() {
  return (
    <>
      <TaskHeader/>
      <AddTask/>
      <TasksList/>
      <TaskItem/>
    </>
  )
}

export default App
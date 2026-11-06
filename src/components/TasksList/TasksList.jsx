import { useSelector } from "react-redux";

import { TaskItem } from "../TaskItem/TaskItem.jsx";

export const TasksList = () => {
    const { tasks, tasksType } = useSelector((state) => state.tasks);

    const getRenderedTasks = (type) => {
        if (type === "all") {
            return tasks;
        } else if (type === "active") {
            return tasks.filter((t) => !t.completed)
        } else if (type === "completed") {
            return tasks.filter((t) => t.completed)
        }
    };

    const redneredTasks = getRenderedTasks(tasksType);

    return (
        <ul className="mt-4">
            {redneredTasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </ul>
    )
};
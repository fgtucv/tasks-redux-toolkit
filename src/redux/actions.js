import { createAction } from "@reduxjs/toolkit";

export const createTaskAction = createAction("tasks/create", (newTask) => {
    return { newTask: newTask }
});
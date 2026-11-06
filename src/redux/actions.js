import { createAction } from "@reduxjs/toolkit";

export const createTaskAction = createAction("tasks/create", (newTask) => {
    return { payload: newTask }
});

export const changeTypeAction = createAction("tasks/change", (newType) => {
    return { payload: newType }
});

export const completeTaskAction = createAction("tasks/complete", (taskId) => {
    return { payload: taskId }
});

export const deleteTaskAction = createAction("tasks/delete", (taskId) => {
    return { payload: taskId }
});
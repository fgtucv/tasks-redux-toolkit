import { createReducer } from "@reduxjs/toolkit";

import {
    createTaskAction,
    changeTypeAction,
    completeTaskAction,
    deleteTaskAction
} from "./actions.js";

import tasksjson from "../data/tasks.json";

const initialState = {
    tasks: tasksjson,
    tasksType: "all",
};

export const tasksReducer = createReducer(initialState, (builder) => {
    builder.addCase(createTaskAction, (state, action) => {
        const newId = state.tasks.at(-1) ? state.tasks.at(-1).id + 1 : 1;

        return {
            ...state, tasks: [...state.tasks,
            { id: newId, text: action.payload, completed: false }
            ]
        };
    }).addCase(changeTypeAction, (state, action) => {
        return { ...state, tasksType: action.payload }
    }).addCase(completeTaskAction, (state, action) => {
        const newTasks = state.tasks.map((task) => {
            if (task.id === action.payload) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }

            return task;
        })

        return { ...state, tasks: newTasks }
    }).addCase(deleteTaskAction, (state, action) => {
        return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload) }
    })
});
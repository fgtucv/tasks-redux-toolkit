import { createReducer } from "@reduxjs/toolkit";

import { createTaskAction } from "./actions.js";

import tasksjson from "../data/tasks.json";

const initialState = {
    tasks: tasksjson,
};

export const tasksReducer = createReducer(initialState, (builder) => {
    builder.addCase(createTaskAction, (state, action) => {
        return state;
    });
});
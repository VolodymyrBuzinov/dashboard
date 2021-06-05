import { createAction } from '@reduxjs/toolkit';

// export const deleteTask = createAction('deleteTask')

export const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
export const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
export const deleteTaskError = createAction('tasks/deleteTaskError');

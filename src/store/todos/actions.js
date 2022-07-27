import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
} from "./types";

import createAction from "../../utils/createAction";

export const fetchTodoRequest = createAction(FETCH_TODO_REQUEST);
export const fetchTodoSuccess = createAction(FETCH_TODO_SUCCESS);
export const fetchTodoFailure = createAction(FETCH_TODO_FAILURE);

export const addTodoRequest = createAction(ADD_TODO_REQUEST);
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS);
export const addTodoFailure = createAction(ADD_TODO_FAILURE);

export const removeTodoRequest = createAction(REMOVE_TODO_REQUEST);
export const removeTodoSuccess = createAction(REMOVE_TODO_SUCCESS);
export const removeTodoFailure = createAction(REMOVE_TODO_FAILURE);

export const updateTodoRequest = createAction(UPDATE_TODO_REQUEST);
export const updateTodoSuccess = createAction(UPDATE_TODO_SUCCESS);
export const updateTodoFailure = createAction(UPDATE_TODO_FAILURE);

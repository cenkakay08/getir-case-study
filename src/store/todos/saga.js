import { call, put, takeLatest } from "redux-saga/effects";
import * as TodosActions from "./actions";
import * as TodosTypes from "./types";
import { fetchTodos } from "../../api/fetchTodos";
import { mapFirebaseData } from "../../utils/mapFirebaseData";
import { addTodo } from "../../api/addTodo";
import { removeTodo } from "../../api/removeTodo";

function* fetchTodoRequest() {
  try {
    const data = mapFirebaseData(yield call(fetchTodos));
    yield put(TodosActions.fetchTodoSuccess(data));
  } catch (error) {
    yield put(TodosActions.fetchTodoFailure(error));
  }
}

function* addTodoRequest(action) {
  try {
    yield call(addTodo, action.payload);
    yield put(TodosActions.addTodoSuccess(action.payload));
  } catch (error) {
    yield put(TodosActions.addTodoFailure(error));
  }
}

function* removeTodoRequest(action) {
  try {
    yield call(removeTodo, action.payload);
    yield put(TodosActions.removeTodoSuccess(action.payload));
  } catch (error) {
    yield put(TodosActions.removeTodoFailure(error));
  }
}

function* updateTodoRequest(action) {
  try {
    yield call(addTodo, action.payload);
    yield put(TodosActions.updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(TodosActions.updateTodoFailure(error));
  }
}

export function* rootSaga() {
  yield takeLatest(TodosTypes.FETCH_TODO_REQUEST, fetchTodoRequest);
  yield takeLatest(TodosTypes.ADD_TODO_REQUEST, addTodoRequest);
  yield takeLatest(TodosTypes.REMOVE_TODO_REQUEST, removeTodoRequest);
  yield takeLatest(TodosTypes.UPDATE_TODO_REQUEST, updateTodoRequest);
}

export default rootSaga;

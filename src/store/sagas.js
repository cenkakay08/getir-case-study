import { fork } from "redux-saga/effects";
import todosSaga from "./todos/saga";

function* rootSaga() {
  yield fork(todosSaga);
}

export default rootSaga;

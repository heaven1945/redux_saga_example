import { put, takeEvery, all } from "redux-saga/effects";

import {
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
  INCREMENT,
  DECREMENT
} from "./rootSlice";

function delay(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

//Task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: DECREMENT });
}

//Sagas
function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}

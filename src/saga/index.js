import { fork } from "redux-saga/effects";

import couter from "./counterSaga";

export default function* rootSaga() {
  yield [fork(couter)];
}

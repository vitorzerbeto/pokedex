import { put, all, takeLatest } from "redux-saga/effects";

import { INCREMENT_ACTION, tickAction } from "../actions/counterActions";

function* incrementWorker() {
  yield put(tickAction({ lastUpdate: 123, light: true }));
}
function* incrementWatcher() {
  console.log(1);
  yield takeLatest(INCREMENT_ACTION, incrementWorker);
}

export default function* main() {
  yield all([incrementWatcher]);
}

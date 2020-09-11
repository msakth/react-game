import { fork } from "redux-saga/effects";

import playerSaga from "./playerSaga";
import shuffleSaga from "./shuffleSaga";

export default function* rootSaga() {
  yield fork(playerSaga);
  yield fork(shuffleSaga);
}

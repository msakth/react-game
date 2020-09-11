import { takeEvery, call, put } from "redux-saga/effects";

import { ACTION_TYPES } from "../redux/constants";
import ApiHelper from "../apiCall";

export function* fetchPlayers(action) {
  try {
    const results = yield call(ApiHelper.getAxios, action.url);

    yield put({
      type: ACTION_TYPES.PLAYERS_FETCH_SUCCESS,
      players: results.data.players,
    });
  } catch (e) {
    yield put({ type: ACTION_TYPES.PLAYERS_FETCH_FAILURE, message: e.message });
  }
}

function* playerSaga() {
  yield takeEvery(ACTION_TYPES.PLAYERS_FETCH_INIT, fetchPlayers);
}

export default playerSaga;

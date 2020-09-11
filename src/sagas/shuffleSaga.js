import { takeEvery, call, put } from "redux-saga/effects";
import { ACTION_TYPES } from "../redux/constants";
import UtilityHelper from "../utility";

export function* getFirstThreePlayeers(players) {
  return yield players.slice(0, 3);
}

export function* shufflePlayers(action) {
  try {
    const shuffledPlayers = yield call(UtilityHelper.shuffle, action.players);
    const firstThreeplayers = yield call(
      getFirstThreePlayeers,
      shuffledPlayers
    );
    yield put({
      type: ACTION_TYPES.PLAYERS_SHUFFLE_SUCCESS,
      shuffledPlayers: firstThreeplayers,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.PLAYERS_SHUFFLE_FAILURE,
      message: e.message,
    });
  }
}

function* shuffleSaga() {
  yield takeEvery(ACTION_TYPES.PLAYERS_SHUFFLE_INIT, shufflePlayers);
}

export default shuffleSaga;

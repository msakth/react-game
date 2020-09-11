import { takeEvery, call, put } from "redux-saga/effects";
import sinon from "sinon";
import assert from "assert";

import UtilityHelper from "../utility";
import shuffleSaga, {
  shufflePlayers,
  getFirstThreePlayeers,
} from "./shuffleSaga";
import { ACTION_TYPES } from "../redux/constants";

describe("src/sagas/shuffleSaga", () => {
  const iterator = shuffleSaga();

  it("takes PLAYERS_SHUFFLE_INIT action", () => {
    assert.deepEqual(
      iterator.next().value,
      takeEvery(ACTION_TYPES.PLAYERS_SHUFFLE_INIT, shufflePlayers)
    );
  });

  it("performs no further action", () => {
    assert.deepEqual(iterator.next().done, true);
  });
});

describe("src/sagas/shufflePlayers", () => {
  const action = { players: [{ some: "value" }, { some1: "valu1" }] };
  const iterator = shufflePlayers(action);

  it("calls shuffle utility", () => {
    const stub = sinon
      .stub(UtilityHelper, "shuffle")
      .returns({ players: [{ some: "value" }, { some1: "valu1" }] });

    assert.deepEqual(iterator.next().value, call(stub, action.players));
  });

  it("calls getFirstThreePlayeers generator function", () => {
    assert.deepEqual(
      iterator.next(action.players).value,
      call(getFirstThreePlayeers, action.players)
    );
  });

  it("calls PLAYERS_SHUFFLE_SUCCESS action", () => {
    assert.deepEqual(
      iterator.next(action.players).value,
      put({
        type: ACTION_TYPES.PLAYERS_SHUFFLE_SUCCESS,
        shuffledPlayers: action.players,
      })
    );
  });

  it("performs no further action", () => {
    assert.deepEqual(iterator.next().done, true);
  });
});

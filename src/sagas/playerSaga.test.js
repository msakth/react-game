import { takeEvery, call, put } from "redux-saga/effects";
import assert from "assert";
import sinon from "sinon";

import { ACTION_TYPES } from "../redux/constants";
import playerSaga, { fetchPlayers } from "./playerSaga";
import ApiHelper from "../apiCall";

describe("src/sagas/playerSaga", () => {
  const iterator = playerSaga();

  it("takes PLAYERS_FETCH_INIT action", () => {
    assert.deepEqual(
      iterator.next().value,
      takeEvery(ACTION_TYPES.PLAYERS_FETCH_INIT, fetchPlayers)
    );
  });

  it("performs no further action", () => {
    assert.deepEqual(iterator.next().done, true);
  });
});

describe("src/sagas/fetchPlayers", () => {
  const action = {
    players: [{ some: "value" }, { some1: "valu1" }],
    url: "http://url/",
  };
  const iterator = fetchPlayers(action);

  it("gets player json", () => {
    const axiosStub = sinon.stub(ApiHelper, "getAxios").returns(action.players);
    assert.deepEqual(iterator.next().value, call(axiosStub, action.url));
  });

  it("calls PLAYERS_FETCH_SUCCESS action", () => {
    const results = {
      data: {
        players: [{ some: "value" }, { some1: "valu1" }],
      },
    };

    assert.deepEqual(
      iterator.next(results).value,
      put({
        type: ACTION_TYPES.PLAYERS_FETCH_SUCCESS,
        players: results.data.players,
      })
    );
  });

  it("performs no further action", () => {
    assert.deepEqual(iterator.next().done, true);
  });
});

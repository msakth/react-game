import * as playerActions from "./playersActionCreator";
import { ACTION_TYPES } from "../constants";

it("should return fetch init action", () => {
  const url = "http://url";
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_FETCH_INIT,
    url,
  };

  const action = playerActions.fetchPlayers(url);

  expect(action).toEqual(expectedAction);
});

t("should return fetch success action", () => {
  const players = [{ some: "value" }, { some1: "valu1" }];
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_FETCH_SUCCESS,
    players,
  };

  const action = playerActions.fetchSuccess(players);

  expect(action).toEqual(expectedAction);
});

it("should return fetch failure action", () => {
  const errorMessage = "error message";
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_FETCH_FAILURE,
    errorMessage,
  };

  const action = playerActions.fetchFailure(errorMessage);

  expect(action).toEqual(expectedAction);
});

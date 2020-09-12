import * as shuffleActions from "./shuffleActionCreator";
import { ACTION_TYPES } from "../constants";

it("should return shuffle init action", () => {
  const players = [{ some: "value" }, { some1: "valu1" }];
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_INIT,
    players,
  };

  const action = shuffleActions.shufflePlayers(players);

  expect(action).toEqual(expectedAction);
});

it("should return shuffle success action", () => {
  const shuffledPlayers = [{ some1: "value1" }, { some: "valu" }];
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_SUCCESS,
    shuffledPlayers,
  };

  const action = shuffleActions.shuffleSuccess(shuffledPlayers);

  expect(action).toEqual(expectedAction);
});

it("should return shuffle failure action", () => {
  const errorMessage = "error message";
  const expectedAction = {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_FAILURE,
    errorMessage,
  };

  const action = shuffleActions.shuffleFailure(errorMessage);

  expect(action).toEqual(expectedAction);
});

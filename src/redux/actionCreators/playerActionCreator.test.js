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

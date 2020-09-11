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

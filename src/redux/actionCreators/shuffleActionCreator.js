import { ACTION_TYPES } from "../constants";

export const shufflePlayers = (players) => {
  return {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_INIT,
    players,
  };
};

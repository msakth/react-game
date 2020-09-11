import { ACTION_TYPES } from "../constants";

export const fetchPlayers = (url) => {
  return {
    type: ACTION_TYPES.PLAYERS_FETCH_INIT,
    url,
  };
};

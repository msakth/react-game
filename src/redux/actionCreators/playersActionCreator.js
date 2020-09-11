import { ACTION_TYPES } from "../constants";

export const fetchPlayers = (url) => {
  return {
    type: ACTION_TYPES.PLAYERS_FETCH_INIT,
    url,
  };
};

export const fetchSuccess = (players) => {
  return {
    type: ACTION_TYPES.PLAYERS_FETCH_SUCCESS,
    players,
  };
};

export const fetchFailure = (errorMessage) => {
  return {
    type: ACTION_TYPES.PLAYERS_FETCH_FAILURE,
    errorMessage,
  };
};

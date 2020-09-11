import { ACTION_TYPES } from "../constants";

export const shufflePlayers = (players) => {
  return {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_INIT,
    players,
  };
};

export const shuffleSuccess = (shuffledPlayers) => {
  return {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_SUCCESS,
    shuffledPlayers,
  };
};

export const shuffleFailure = (errorMessage) => {
  return {
    type: ACTION_TYPES.PLAYERS_SHUFFLE_FAILURE,
    errorMessage,
  };
};

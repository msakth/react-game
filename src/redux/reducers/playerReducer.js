import initialState from "../initialState";

function PlayerReducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYERS_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "PLAYERS_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        players: action.players,
      };
    case "PLAYERS_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export default PlayerReducer;

import initialState from "../initialState";

function ShuffleReducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYERS_SHUFFLE_INIT":
      return { ...state, isLoading: true, isError: false };
    case "PLAYERS_SHUFFLE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        shuffledPlayers: action.shuffledPlayers,
      };
    case "PLAYERS_SHUFFLE_FAILURE":
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

export default ShuffleReducer;
